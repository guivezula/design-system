import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../components/Card/Card';

const meta = {
  title: 'Components/Card Content',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: "Heading SM",
    subtitle: "Subtitle SM",
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    buttonLabel: "Button Label",
  },
};
