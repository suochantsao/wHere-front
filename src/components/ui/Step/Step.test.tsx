import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Step from './Step';

describe('Step', () => {
  const mockProps = {
    number: '1',
    title: '第一步驟'
  };

  it('should render Step component correctly', () => {
    render(<Step {...mockProps} />);
    
    expect(screen.getByText(mockProps.number)).toBeInTheDocument();
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  it('number should be displayed in circular container', () => {
    const { container } = render(<Step {...mockProps} />);
    
    // Directly find the number container
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

  it('title should have correct styles', () => {
    render(<Step {...mockProps} />);
    
    const title = screen.getByText(mockProps.title);
    expect(title).toHaveClass('text-sm', 'font-medium');
  });

  it('container should have center-aligned styles', () => {
    const { container } = render(<Step {...mockProps} />);
    
    const stepContainer = container.firstElementChild;
    expect(stepContainer).toHaveClass('text-center');
  });

  it('should correctly handle different step numbers', () => {
    const steps = ['1', '2', '3', '10', 'A', 'B'];
    
    steps.forEach(number => {
      const { rerender } = render(<Step number={number} title="Test Step" />);
      expect(screen.getByText(number)).toBeInTheDocument();
      rerender(<div />);
    });
  });

  it('should correctly handle long titles', () => {
    const longTitle = 'This is a very very long step title used to test whether the component can correctly handle long text content';
    
    render(<Step number="1" title={longTitle} />);
    
    expect(screen.getByText(longTitle)).toBeInTheDocument();
    expect(screen.getByText(longTitle)).toHaveClass('text-sm', 'font-medium');
  });

  it('should correctly handle empty titles', () => {
    const { container } = render(<Step number="1" title="" />);
    
    const titleElement = container.querySelector('p.text-sm.font-medium');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent('');
  });

  it('should correctly handle special characters in numbers', () => {
    const specialNumbers = ['①', '★', '✓', '→'];
    
    specialNumbers.forEach(number => {
      const { rerender } = render(<Step number={number} title="Test Step" />);
      expect(screen.getByText(number)).toBeInTheDocument();
      rerender(<div />);
    });
  });

  it('should correctly handle special characters in titles', () => {
    const specialTitle = 'Step & Process <Test>';
    
    render(<Step number="1" title={specialTitle} />);
    
    expect(screen.getByText(specialTitle)).toBeInTheDocument();
  });

  it('number container should be readable', () => {
    const { container } = render(<Step {...mockProps} />);
    
    const numberContainer = container.querySelector('.w-10.h-10.rounded-full');
    
    expect(numberContainer).toHaveClass('font-bold');
    expect(numberContainer).toHaveClass('flex', 'items-center', 'justify-center');
  });

  it('should correctly handle multi-line titles', () => {
    const multiLineTitle = 'First line title\nSecond line title';
    
    render(<Step number="1" title={multiLineTitle} />);
    
    // Use regular expression to match multi-line text
    expect(screen.getByText(/First line title/)).toBeInTheDocument();
  });
});