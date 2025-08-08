import type { Meta, StoryObj } from '@storybook/react';
import Feature from './Feature';

const meta = {
  title: 'UI/Feature',
  component: Feature,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Feature>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Smart Storage',
    description: 'Intelligent organization system that adapts to your needs',
  },
};

export const Mobile: Story = {
  args: {
    title: 'Mobile Control',
    description: 'Manage your storage from anywhere, anytime',
  },
};

export const Analytics: Story = {
  args: {
    title: 'Analytics',
    description: 'Track and optimize your space usage',
  },
};

export const LongDescription: Story = {
  args: {
    title: 'Advanced Feature',
    description: 'This is a much longer description to demonstrate how the component handles longer text content and maintains good readability across different screen sizes.',
  },
};