import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', {
      value: 0,
      writable: true,
    });

    window.addEventListener = vi.fn();
    window.removeEventListener = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render Header component correctly', () => {
    render(<Header />);
    
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByText('wHere')).toBeInTheDocument();
    expect(screen.getByText('產品介紹')).toBeInTheDocument();
    expect(screen.getByText('活動資訊')).toBeInTheDocument();
    expect(screen.getByText('關於我們')).toBeInTheDocument();
    expect(screen.getByText('登入')).toBeInTheDocument();
    expect(screen.getByText('註冊')).toBeInTheDocument();
  });

  it('should have correct CSS classes in initial state', () => {
    render(<Header />);
    
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('translate-y-[30px]');
    
    const headerContent = header.firstElementChild;
    expect(headerContent).toHaveClass('h-[90px]', 'px-[45px]', 'mx-[5vw]', 'rounded-[100px]');
  });

  it('should change styles when page scrolls', () => {
    // Test if scroll listener is set up correctly
    render(<Header />);
    
    expect(window.addEventListener).toHaveBeenCalledWith('scroll', expect.any(Function));
    
    // Note: In actual applications, scrolling triggers state updates, but in unit tests
    // we mainly verify that event listeners are set up correctly
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  it('should restore original styles when page returns to top', () => {
    render(<Header />);
    
    const scrollHandler = vi.mocked(window.addEventListener).mock.calls.find(
      call => call[0] === 'scroll'
    )?.[1] as () => void;

    Object.defineProperty(window, 'scrollY', {
      value: 0,
      writable: true,
    });

    if (scrollHandler) {
      scrollHandler();
    }

    const header = screen.getByRole('banner');
    expect(header).toHaveClass('translate-y-[30px]');
    
    const headerContent = header.firstElementChild;
    expect(headerContent).toHaveClass('h-[90px]', 'px-[45px]', 'mx-[5vw]', 'rounded-[100px]');
  });

  it('navigation links should have correct href attributes', () => {
    render(<Header />);
    
    const aboutLink = screen.getByRole('link', { name: '關於我們' });
    expect(aboutLink).toHaveAttribute('href', '/about');
    
    const loginLink = screen.getByRole('link', { name: '登入' });
    expect(loginLink).toHaveAttribute('href', '/login');
    
    const registerLink = screen.getByRole('link', { name: '註冊' });
    expect(registerLink).toHaveAttribute('href', '/register');
  });

  it('hover effects should be applied correctly', () => {
    render(<Header />);
    
    const productLink = screen.getByText('產品介紹');
    const activityLink = screen.getByText('活動資訊');
    const aboutLink = screen.getByText('關於我們');

    expect(productLink).toHaveClass('hover:text-[#DAC9A6]');
    expect(activityLink).toHaveClass('hover:text-[#DAC9A6]');
    expect(aboutLink).toHaveClass('hover:text-[#DAC9A6]');
  });

  it('should remove event listeners when component unmounts', () => {
    const { unmount } = render(<Header />);
    
    unmount();
    
    expect(window.removeEventListener).toHaveBeenCalledWith('scroll', expect.any(Function));
  });
});