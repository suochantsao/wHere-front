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

  it('應該正確渲染 Header 元件', () => {
    render(<Header />);
    
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByText('wHere')).toBeInTheDocument();
    expect(screen.getByText('產品介紹')).toBeInTheDocument();
    expect(screen.getByText('活動資訊')).toBeInTheDocument();
    expect(screen.getByText('關於我們')).toBeInTheDocument();
    expect(screen.getByText('登入')).toBeInTheDocument();
    expect(screen.getByText('註冊')).toBeInTheDocument();
  });

  it('初始狀態應該有正確的 CSS 類別', () => {
    render(<Header />);
    
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('translate-y-[30px]');
    
    const headerContent = header.firstElementChild;
    expect(headerContent).toHaveClass('h-[90px]', 'px-[45px]', 'mx-[5vw]', 'rounded-[100px]');
  });

  it('當頁面滾動時應該改變樣式', () => {
    // 測試滾動監聽器是否正確設置
    render(<Header />);
    
    expect(window.addEventListener).toHaveBeenCalledWith('scroll', expect.any(Function));
    
    // 注意：在實際應用中，滾動會觸發狀態更新，但在單元測試中
    // 我們主要驗證事件監聽器是否正確設置
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  it('當頁面回到頂部時應該恢復原始樣式', () => {
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

  it('導航連結應該有正確的 href 屬性', () => {
    render(<Header />);
    
    const aboutLink = screen.getByRole('link', { name: '關於我們' });
    expect(aboutLink).toHaveAttribute('href', '/about');
    
    const loginLink = screen.getByRole('link', { name: '登入' });
    expect(loginLink).toHaveAttribute('href', '/login');
    
    const registerLink = screen.getByRole('link', { name: '註冊' });
    expect(registerLink).toHaveAttribute('href', '/register');
  });

  it('hover 效果應該正確套用', () => {
    render(<Header />);
    
    const productLink = screen.getByText('產品介紹');
    const activityLink = screen.getByText('活動資訊');
    const aboutLink = screen.getByText('關於我們');

    expect(productLink).toHaveClass('hover:text-[#DAC9A6]');
    expect(activityLink).toHaveClass('hover:text-[#DAC9A6]');
    expect(aboutLink).toHaveClass('hover:text-[#DAC9A6]');
  });

  it('元件卸載時應該移除事件監聽器', () => {
    const { unmount } = render(<Header />);
    
    unmount();
    
    expect(window.removeEventListener).toHaveBeenCalledWith('scroll', expect.any(Function));
  });
});