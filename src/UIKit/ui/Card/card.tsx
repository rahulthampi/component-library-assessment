import * as React from 'react';

import { cn } from '@@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';

const cardVariants = cva(
  'flex rounded border bg-background transition-colors outline-none focus:border-border-ring',
  {
    variants: {
      variant: {
        outlined: 'border-border hover:bg-neutral',
        elevated: 'border-transparent shadow transition-shadow hover:shadow-md',
        ghost: 'border-none hover:bg-neutral',
      },
      size: {
        inset: 'p-0',
        sm: 'p-2',
        md: 'p-4',
        lg: 'p-6',
      },
    },
    defaultVariants: {
      variant: 'outlined',
      size: 'md',
    },
  },
);

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant, size, className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';

    return <Comp ref={ref} className={cn(cardVariants({ variant, size, className }))} {...props} />;
  },
);
Card.displayName = 'Card';

export type { CardProps };

export { Card };
