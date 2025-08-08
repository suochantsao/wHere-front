import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Step from './Step';

describe('Step', () => {
  const mockProps = {
    number: '1',
    title: '第一步驟'
  };

  it('應該正確渲染 Step 元件', () => {
    render(<Step {...mockProps} />);
    
    expect(screen.getByText(mockProps.number)).toBeInTheDocument();
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  it('數字應該顯示在圓形容器中', () => {
    const { container } = render(<Step {...mockProps} />);
    
    // 直接查找數字容器
    const numberContainer = container.querySelector('.w-10.h-10.rounded-full');
    
    expect(numberContainer).toBeInTheDocument();
    expect(numberContainer).toHaveClass(
      'w-10',
      'h-10',
      'rounded-full',
      'bg-gray-200',
      'mx-auto',
      'mb-2',
      'flex',
      'items-center',
      'justify-center',
      'font-bold'
    );
    expect(numberContainer).toHaveTextContent(mockProps.number);
  });

  it('標題應該有正確的樣式', () => {
    render(<Step {...mockProps} />);
    
    const title = screen.getByText(mockProps.title);
    expect(title).toHaveClass('text-sm', 'font-medium');
  });

  it('容器應該有居中對齊的樣式', () => {
    const { container } = render(<Step {...mockProps} />);
    
    const stepContainer = container.firstElementChild;
    expect(stepContainer).toHaveClass('text-center');
  });

  it('應該正確處理不同的步驟編號', () => {
    const steps = ['1', '2', '3', '10', 'A', 'B'];
    
    steps.forEach(number => {
      const { rerender } = render(<Step number={number} title="測試步驟" />);
      expect(screen.getByText(number)).toBeInTheDocument();
      rerender(<div />);
    });
  });

  it('應該正確處理長標題', () => {
    const longTitle = '這是一個非常非常長的步驟標題，用來測試元件是否能正確處理長文字內容';
    
    render(<Step number="1" title={longTitle} />);
    
    expect(screen.getByText(longTitle)).toBeInTheDocument();
    expect(screen.getByText(longTitle)).toHaveClass('text-sm', 'font-medium');
  });

  it('應該正確處理空的標題', () => {
    const { container } = render(<Step number="1" title="" />);
    
    const titleElement = container.querySelector('p.text-sm.font-medium');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent('');
  });

  it('應該正確處理特殊字符在編號中', () => {
    const specialNumbers = ['①', '★', '✓', '→'];
    
    specialNumbers.forEach(number => {
      const { rerender } = render(<Step number={number} title="測試步驟" />);
      expect(screen.getByText(number)).toBeInTheDocument();
      rerender(<div />);
    });
  });

  it('應該正確處理特殊字符在標題中', () => {
    const specialTitle = '步驟 & 流程 <測試>';
    
    render(<Step number="1" title={specialTitle} />);
    
    expect(screen.getByText(specialTitle)).toBeInTheDocument();
  });

  it('數字容器應該是可讀的', () => {
    const { container } = render(<Step {...mockProps} />);
    
    const numberContainer = container.querySelector('.w-10.h-10.rounded-full');
    
    expect(numberContainer).toHaveClass('font-bold');
    expect(numberContainer).toHaveClass('flex', 'items-center', 'justify-center');
  });

  it('應該正確處理多行標題', () => {
    const multiLineTitle = '第一行標題\n第二行標題';
    
    render(<Step number="1" title={multiLineTitle} />);
    
    // 使用正則表達式匹配多行文字
    expect(screen.getByText(/第一行標題/)).toBeInTheDocument();
  });
});