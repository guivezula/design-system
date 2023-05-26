import type { Meta, StoryObj } from '@storybook/react';
import { Subtitle } from '../components/Subtitle/Subtitle';

const meta = {
  title: 'Components/Subtitle Small',
  component: Subtitle,
  tags: ['autodocs'],
} satisfies Meta<typeof Subtitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: "Subtitle SM"
  },
};
