import { render, screen } from '@testing-library/react';

import { Card } from './card';

describe('Card', () => {
  it('renders a default card with the "outlined" variant and "md" size', () => {
    const rendered = render(<Card>Hello, World!</Card>);

    expect(rendered).toMatchSnapshot();

    const card = screen.getByText('Hello, World!');

    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('border-border hover:bg-neutral p-4');
  });

  it('renders a card with a different variant and size', () => {
    const rendered = render(
      <Card variant="elevated" size="lg">
        Large Card
      </Card>,
    );

    expect(rendered).toMatchSnapshot();

    const card = screen.getByText('Large Card');

    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('border-transparent shadow transition-shadow hover:shadow-md p-6');
  });

  it('renders as a child component', () => {
    const rendered = render(
      <Card asChild>
        <span>Child Component</span>
      </Card>,
    );

    expect(rendered).toMatchSnapshot();

    const childComponent = screen.getByText('Child Component');

    expect(childComponent).toBeInTheDocument();
    expect(childComponent).toHaveClass('border-border hover:bg-neutral p-4');
  });
});
