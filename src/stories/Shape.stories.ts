import type { Meta, StoryObj } from '@storybook/react';
import { Shape } from '../components/Shape/Shape';

const meta = {
  title: 'Components/Shape',
  component: Shape,
  tags: ['autodocs'],
} satisfies Meta<typeof Shape>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
