import type { Meta, StoryObj } from '@storybook/react';
import Step from './Step';

const meta = {
  title: 'UI/Step',
  component: Step,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Step>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Step1: Story = {
  args: {
    number: '1',
    title: 'Sign Up',
  },
};

export const Step2: Story = {
  args: {
    number: '2',
    title: 'Setup System',
  },
};

export const Step3: Story = {
  args: {
    number: '3',
    title: 'Organize Items',
  },
};

export const Step4: Story = {
  args: {
    number: '4',
    title: 'Track & Manage',
  },
};

export const LongTitle: Story = {
  args: {
    number: '5',
    title: 'Configure Advanced Settings and Preferences',
  },
};

export const DoubleDigit: Story = {
  args: {
    number: '10',
    title: 'Complete Process',
  },
};