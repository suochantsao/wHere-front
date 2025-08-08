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

  it('應該正確渲染 Testimonial 元件', () => {
    render(<Testimonial {...mockProps} />);
    
    expect(screen.getByText(mockProps.name)).toBeInTheDocument();
    expect(screen.getByText(mockProps.role)).toBeInTheDocument();
    expect(screen.getByText(mockProps.quote)).toBeInTheDocument();
  });

  it('推薦語應該有正確的樣式和位置', () => {
    render(<Testimonial {...mockProps} />);
    
    const quote = screen.getByText(mockProps.quote);
    expect(quote).toHaveClass('mb-2');
  });

  it('姓名應該有粗體樣式', () => {
    render(<Testimonial {...mockProps} />);
    
    const name = screen.getByText(mockProps.name);
    expect(name).toHaveClass('font-semibold');
  });

  it('職位應該有灰色文字樣式', () => {
    render(<Testimonial {...mockProps} />);
    
    const role = screen.getByText(mockProps.role);
    expect(role).toHaveClass('text-gray-500');
  });

  it('容器應該有正確的背景和佈局樣式', () => {
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

  it('應該正確處理長推薦語', () => {
    const longQuote = '這是一個非常詳細和長的推薦語，描述了產品如何改變了我們的工作流程，提升效率，並且帶來了極佳的用戶體驗。我們團隊所有成員都對這個產品讚不絕口，強烈推薦給其他團隊使用。';
    
    render(<Testimonial name={mockProps.name} role={mockProps.role} quote={longQuote} />);
    
    expect(screen.getByText(longQuote)).toBeInTheDocument();
    expect(screen.getByText(longQuote)).toHaveClass('mb-2');
  });

  it('應該正確處理空的推薦語', () => {
    const { container } = render(<Testimonial name={mockProps.name} role={mockProps.role} quote="" />);
    
    const quoteElement = container.querySelector('p.mb-2');
    expect(quoteElement).toBeInTheDocument();
    expect(quoteElement).toHaveTextContent('');
  });

  it('應該正確處理特殊字符', () => {
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

  it('元素順序應該正確 (推薦語 -> 姓名 -> 職位)', () => {
    const { container } = render(<Testimonial {...mockProps} />);
    
    const elements = container.querySelectorAll('p');
    expect(elements).toHaveLength(3);
    
    expect(elements[0]).toHaveTextContent(mockProps.quote);
    expect(elements[1]).toHaveTextContent(mockProps.name);
    expect(elements[2]).toHaveTextContent(mockProps.role);
  });

  it('應該正確處理包含引號的推薦語', () => {
    const quoteWithQuotes = '"這個產品真的很棒！" 這是我的真心話。';
    
    render(<Testimonial name={mockProps.name} role={mockProps.role} quote={quoteWithQuotes} />);
    
    expect(screen.getByText(quoteWithQuotes)).toBeInTheDocument();
  });

  it('應該正確處理多行推薦語', () => {
    const multiLineQuote = '第一行推薦語\n第二行推薦語\n第三行推薦語';
    
    render(<Testimonial name={mockProps.name} role={mockProps.role} quote={multiLineQuote} />);
    
    // 使用正則表達式匹配多行文字
    expect(screen.getByText(/第一行推薦語/)).toBeInTheDocument();
  });

  it('應該正確處理包含數字和符號的資料', () => {
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