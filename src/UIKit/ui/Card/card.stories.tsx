import { Meta, StoryObj } from '@storybook/react';
import { Badge, Heading } from '@radix-ui/themes';

import { Avatar, AvatarFallback, AvatarImage } from '@@/UIKit/ui/Avatar/avatar.base';

import { Card, CardProps } from './card';

/**
 * The `Card` component is a versatile container for presenting information and actions related to a single concept or object, such as a document or a contact. Cards can be used to give prominence to information and create predictable design patterns. It's important to use them consistently for specific use cases across different user experiences.
 *
 * <details>
 *   <summary>Best Practices</summary>
 *
 *   **TODO**: Details about the best practices for the component to be added here
 * </details>
 */
const meta: Meta = {
  title: 'UIKit/Card',
  component: Card,
  parameters: {
    layout: 'centered', // Optional parameter to center the component in the Canvas
  },
  argTypes: {
    /** Specifies the card variant: 'outlined', 'elevated', or 'ghost' */
    variant: {
      control: 'select',
      options: ['outlined', 'elevated', 'ghost'],
    },

    /** Specifies the card size: 'inset', 'sm', 'md', or 'lg' */
    size: {
      control: 'select',
      options: ['inset', 'sm', 'md', 'lg'],
    },
    className: { control: 'text' },
    asChild: { control: 'boolean' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story<T extends typeof meta> = StoryObj<T>;

const CardContent = () => {
  return (
    <div className="flex gap-4 items-center">
      <Avatar className="w-12 h-12">
        <AvatarImage src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" />
        <AvatarFallback>RT</AvatarFallback>
      </Avatar>

      <div className="w-full flex flex-col justify-between">
        <Badge className="uppercase text-t-xs font-bold tracking-wider text-neutral-foreground">
          Wallet
        </Badge>

        <Heading as="h3" className="font-inter font-semibold text-t-lg">
          Safe
        </Heading>
      </div>
    </div>
  );
};

/**
 * The `Card` component allows for displaying content within a card-like container.
 *
 * This story demonstrates the default usage of the `Card` component with an outlined style.
 */
export const Default: Story<CardProps> = {
  args: {
    className: 'w-[385px]', // Additional CSS classes for styling
    children: <CardContent />, // The content to be displayed within the card
  },
};

/**
 * The `Card` component with an outlined style.
 *
 * This story demonstrates a `Card` with an outlined style and a custom size.
 */
export const Outlined: Story<CardProps> = {
  args: {
    variant: 'outlined',
    size: 'md',
    className: 'w-[385px]',
    children: <CardContent />,
  },
};

/**
 * The `Card` component with an elevated style.
 *
 * This story showcases a `Card` with an elevated style and a larger size.
 */
export const Elevated: Story<CardProps> = {
  args: {
    variant: 'elevated',
    size: 'lg',
    className: 'w-[385px]',
    children: <CardContent />,
  },
};

/**
 * The `Card` component with a ghost style.
 *
 * This story presents a `Card` with a ghost style and a medium size.
 */
export const Ghost: Story<CardProps> = {
  args: {
    variant: 'ghost',
    size: 'md',
    className: 'w-[385px]',
    children: <CardContent />,
  },
};

/**
 * The `Card` component used with a child element.
 *
 * This story demonstrates the `Card` component with an outlined style and custom content wrapped in an anchor tag.
 */
export const AsChildElement: Story<CardProps> = {
  args: {
    variant: 'outlined',
    size: 'md',
    asChild: true, // Render the children as a child element
    className: 'w-[385px]',
    children: (
      <a href="#" className="flex gap-4 items-center">
        <CardContent />
      </a>
    ),
  },
};
