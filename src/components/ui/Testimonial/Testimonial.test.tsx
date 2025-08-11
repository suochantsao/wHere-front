import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Testimonial from './Testimonial';

describe('Testimonial', () => {
  const mockProps = {
    name: '張小明',
    role: '產品經理',
    quote: '這個產品真的很棒，大大提升了我們的工作效率！'
  };

  it('should render Testimonial component correctly', () => {
    render(<Testimonial {...mockProps} />);
    
    expect(screen.getByText(mockProps.name)).toBeInTheDocument();
    expect(screen.getByText(mockProps.role)).toBeInTheDocument();
    expect(screen.getByText(mockProps.quote)).toBeInTheDocument();
  });

  it('testimonial quote should have correct styles and position', () => {
    render(<Testimonial {...mockProps} />);
    
    const quote = screen.getByText(mockProps.quote);
    expect(quote).toHaveClass('mb-2');
  });

  it('name should have bold style', () => {
    render(<Testimonial {...mockProps} />);
    
    const name = screen.getByText(mockProps.name);
    expect(name).toHaveClass('font-semibold');
  });

  it('role should have gray text style', () => {
    render(<Testimonial {...mockProps} />);
    
    const role = screen.getByText(mockProps.role);
    expect(role).toHaveClass('text-gray-500');
  });

  it('container should have correct background and layout styles', () => {
    const { container } = render(<Testimonial {...mockProps} />);
    
    const testimonialContainer = container.firstElementChild;
    expect(testimonialContainer).toHaveClass(
      'bg-gray-100',
      'p-4',
      'rounded',
      'shadow',
      'text-sm'
    );
  });

  it('should correctly handle long testimonial quotes', () => {
    const longQuote = '這是一個非常詳細和長的推薦語，描述了產品如何改變了我們的工作流程，提升效率，並且帶來了極佳的用戶體驗。我們團隊所有成員都對這個產品讚不絕口，強烈推薦給其他團隊使用。';
    
    render(<Testimonial name={mockProps.name} role={mockProps.role} quote={longQuote} />);
    
    expect(screen.getByText(longQuote)).toBeInTheDocument();
    expect(screen.getByText(longQuote)).toHaveClass('mb-2');
  });

  it('should correctly handle empty testimonial quotes', () => {
    const { container } = render(<Testimonial name={mockProps.name} role={mockProps.role} quote="" />);
    
    const quoteElement = container.querySelector('p.mb-2');
    expect(quoteElement).toBeInTheDocument();
    expect(quoteElement).toHaveTextContent('');
  });

  it('should correctly handle special characters', () => {
    const specialProps = {
      name: '李 & 王',
      role: 'UI/UX 設計師',
      quote: '產品功能 <優秀>，設計 "精美"！'
    };
    
    render(<Testimonial {...specialProps} />);
    
    expect(screen.getByText(specialProps.name)).toBeInTheDocument();
    expect(screen.getByText(specialProps.role)).toBeInTheDocument();
    expect(screen.getByText(specialProps.quote)).toBeInTheDocument();
  });

  it('element order should be correct (quote -> name -> role)', () => {
    const { container } = render(<Testimonial {...mockProps} />);
    
    const elements = container.querySelectorAll('p');
    expect(elements).toHaveLength(3);
    
    expect(elements[0]).toHaveTextContent(mockProps.quote);
    expect(elements[1]).toHaveTextContent(mockProps.name);
    expect(elements[2]).toHaveTextContent(mockProps.role);
  });

  it('should correctly handle testimonial quotes with quotation marks', () => {
    const quoteWithQuotes = '"這個產品真的很棒！" 這是我的真心話。';
    
    render(<Testimonial name={mockProps.name} role={mockProps.role} quote={quoteWithQuotes} />);
    
    expect(screen.getByText(quoteWithQuotes)).toBeInTheDocument();
  });

  it('should correctly handle multi-line testimonial quotes', () => {
    const multiLineQuote = '第一行推薦語\n第二行推薦語\n第三行推薦語';
    
    render(<Testimonial name={mockProps.name} role={mockProps.role} quote={multiLineQuote} />);
    
    // Use regular expression to match multi-line text
    expect(screen.getByText(/第一行推薦語/)).toBeInTheDocument();
  });

  it('should correctly handle data with numbers and symbols', () => {
    const numericProps = {
      name: '張三 123',
      role: 'CEO & 創辦人',
      quote: '效率提升了 200%！真的很讚 👍'
    };
    
    render(<Testimonial {...numericProps} />);
    
    expect(screen.getByText(numericProps.name)).toBeInTheDocument();
    expect(screen.getByText(numericProps.role)).toBeInTheDocument();
    expect(screen.getByText(numericProps.quote)).toBeInTheDocument();
  });
});