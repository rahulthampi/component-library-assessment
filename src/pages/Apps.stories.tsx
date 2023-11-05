import { Meta, StoryObj } from '@storybook/react';
import App from './App'; // Import your App component

const meta: Meta = {
  title: 'App',
  component: App,
  parameters: {
    layout: 'centered', // Optional parameter to center the component in the Canvas
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Example: Story = {
  args: {},
};
