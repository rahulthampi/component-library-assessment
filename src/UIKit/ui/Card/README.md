# Card

The Card component is a versatile React component that can be used to create cards and similar UI elements with various visual styles. It supports different variants and sizes, and it's designed to be flexible and easy to use in your React applications.

It leverages `class-variance-authority`(CVA) for defining the styles for variants and size props.

## Basic Usage

Import the Card component and use it in your React application as follows:

```jsx
function MyComponent() {
  return (
    <div>
      <Card variant="outlined" size="md">
        {/* Your card content goes here */}
      </Card>
    </div>
  );
}
```

## Props

The Card component accepts the following props:

- `variant`: Specifies the visual style of the card. It supports the following values:

  - `outlined`(default): A bordered card with a hover effect.
  - `elevated`: A raised card with a shadow and hover effect.
  - `ghost`: A card with no border and a hover effect.

- `size`: Sets the padding size for the card. It supports the following values:

  - `inset`: No padding.
  - `sm`: Small padding.
  - `md` (default): Medium padding.
  - `lg`: Large padding.

- `asChild`: A boolean prop. If `true`, the card is treated as a child component (e.g., within a slot or another container).

Other props: You can pass additional HTML attributes and event handlers.

## Example

Here's an example of using the Card component with different variants and sizes:

```jsx
function MyComponent() {
  return (
    <div>
      <Card variant="outlined" size="md">
        {/* Card Content */}
      </Card>

      <Card variant="elevated" size="lg">
        {/* Card Content */}
      </Card>

      <Card variant="ghost" size="sm">
        {/* Card Content */}
      </Card>
    </div>
  );
}
```

## Contributing

Adding new variants into the Card components are super easy. Just add a new key into `variants` object inside `cardVariants:card.tsx` file.

Types will automatically be added without any extra efforts.
