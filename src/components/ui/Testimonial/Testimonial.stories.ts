import type { Meta, StoryObj } from '@storybook/react';
import Testimonial from './Testimonial';

const meta = {
  title: 'UI/Testimonial',
  component: Testimonial,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Testimonial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HomeOwner: Story = {
  args: {
    name: 'Sarah Johnson',
    role: 'Home Owner',
    quote: 'Finally, a storage solution that makes sense!',
  },
};

export const BusinessOwner: Story = {
  args: {
    name: 'Mike Chan',
    role: 'Business Owner',
    quote: 'Transformed our inventory management.',
  },
};

export const ProfessionalOrganizer: Story = {
  args: {
    name: 'Emily Davis',
    role: 'Professional Organizer',
    quote: 'The perfect tool for my clients.',
  },
};

export const LongQuote: Story = {
  args: {
    name: 'Alex Chen',
    role: 'Property Manager',
    quote: 'This system has revolutionized how we manage multiple properties. The intuitive interface and comprehensive tracking features have saved us countless hours and significantly reduced lost items. I would recommend this to anyone managing storage across multiple locations.',
  },
};

export const ShortQuote: Story = {
  args: {
    name: 'Lisa Wang',
    role: 'Student',
    quote: 'Love it!',
  },
};