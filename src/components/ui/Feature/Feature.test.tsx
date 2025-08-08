import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Feature from './Feature';

describe('Feature', () => {
  const mockProps = {
    title: '測試功能標題',
    description: '這是一個測試功能的描述文字'
  };

  it('應該正確渲染 Feature 元件', () => {
    render(<Feature {...mockProps} />);
    
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
  });

  it('標題應該使用 h3 標籤並有正確的樣式', () => {
    render(<Feature {...mockProps} />);
    
    const title = screen.getByRole('heading', { level: 3 });
    expect(title).toHaveTextContent(mockProps.title);
    expect(title).toHaveClass('font-semibold');
  });

  it('描述文字應該有正確的樣式', () => {
    render(<Feature {...mockProps} />);
    
    const description = screen.getByText(mockProps.description);
    expect(description).toHaveClass('text-sm', 'text-gray-600');
  });

  it('容器應該有正確的佈局樣式', () => {
    const { container } = render(<Feature {...mockProps} />);
    
    const featureContainer = container.firstElementChild;
    expect(featureContainer).toHaveClass('text-center', 'px-4');
  });

  it('應該正確處理空的 title', () => {
    render(<Feature title="" description={mockProps.description} />);
    
    const title = screen.getByRole('heading', { level: 3 });
    expect(title).toHaveTextContent('');
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
  });

  it('應該正確處理空的 description', () => {
    const { container } = render(<Feature title={mockProps.title} description="" />);
    
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    const descriptionElement = container.querySelector('p.text-sm.text-gray-600');
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent('');
  });

  it('應該正確處理長文字內容', () => {
    const longTitle = '這是一個非常非常非常長的功能標題，用來測試元件是否能正確處理長文字內容';
    const longDescription = '這是一個非常詳細的描述文字，包含了很多資訊和細節，用來測試元件是否能正確顯示和處理較長的描述內容，確保使用者體驗良好。';
    
    render(<Feature title={longTitle} description={longDescription} />);
    
    expect(screen.getByText(longTitle)).toBeInTheDocument();
    expect(screen.getByText(longDescription)).toBeInTheDocument();
  });

  it('應該正確處理特殊字符', () => {
    const specialTitle = '功能 & 特色 <測試>';
    const specialDescription = '描述包含特殊字符: @#$%^&*()';
    
    render(<Feature title={specialTitle} description={specialDescription} />);
    
    expect(screen.getByText(specialTitle)).toBeInTheDocument();
    expect(screen.getByText(specialDescription)).toBeInTheDocument();
  });
});