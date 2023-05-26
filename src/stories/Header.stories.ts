import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../components/Header/Header';

const meta = {
  title: 'Components/Heading Small',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: "Heading SM"
  },
};
