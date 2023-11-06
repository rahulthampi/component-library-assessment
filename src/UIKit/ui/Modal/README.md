# Modal

The Modal component is a flexible and customizable modal modal component built for React applications.

It leverages **Radix-UI** and `class-variance-authority`(CVA) for its functionality and styling.

## Basic Usage

Import the necessary components and use the Modal component in your React application. Here's an example of how to use it:

```jsx
function MyComponent() {
  return (
    <Root>
      <Trigger asChild>
        <button>Open Modal</button>
      </Trigger>

      <Content>
        <Header>
          <Title>Modal Title</Title>
          <Description>Modal Description</Description>
        </Header>

        {/* Your content goes here */}

        <Footer>
          <Close asChild>
            <button>Close</button>
          </Close>
        </Footer>
      </Content>
    </Root>
  );
}
```

## Props

The Modal component is composed of several parts, and each part has its own set of props. Here are the main components you can use:

1. `Root`: The root component for the modal.
2. `Trigger`: The component that triggers the modal to open.
3. `Content`: The content of the modal, including the header, title, description, and footer.
4. `Header`: The header of the modal.
5. `Title`: The title of the modal.
6. `Description`: The description for the content of the modal.
7. `Footer`: The header of the modal.
8. `Close`: A component that wraps any element or a component to attach modal close event to itself.

**Note**:

1. `Trigger` and `Content`: should always be nested inside `Root` component.
2. `Header`, `Footer`: should always be nested inside `Content` component.

You can customize the appearance and behavior of the modal by passing props to these components.

## Examples

Here are some examples of using the Modal component in different scenarios. You can use these examples as a starting point for your own implementations:

1. **Default Usage**: The Modal component with a trigger button to open the modal.

```jsx
<Root>
  <Trigger asChild>
    <button>Open Modal</button>
  </Trigger>
  <Content>
    <Header>
      <Title>Default Modal</Title>
    </Header>

    <p>Your Content</p>

    <Footer>
      <Close asChild>
        <button>Close</button>
      </Close>
    </Footer>
  </Content>
</Root>
```

2. **Without Close Icon**: A Modal component without the close icon.

```jsx
<Root>
  <Trigger asChild>
    <button>Open Modal</button>
  </Trigger>
  <Content showClose={false}>
    <Header>
      <Title>Modal without Close Icon</Title>
    </Header>
    <Description>This modal doesn't have a close icon.</Description>
    <Footer>
      <Close asChild>
        <button>Close</button>
      </Close>
    </Footer>
  </Content>
</Root>
```

3. **With Custom Close Icon**: A Modal component with a custom close icon.

```jsx
<Root>
  <Trigger asChild>
    <button>Open Modal</button>
  </Trigger>
  <Content closeIcon={<CustomCloseIcon />}>
    <Header>
      <Title>Modal with Custom Close Icon</Title>
    </Header>
    <Description>This modal has a custom close icon.</Description>
    <Footer>
      <Close asChild>
        <button>Close</button>
      </Close>
    </Footer>
  </Content>
</Root>
```

4. **Open Without Trigger**: A Modal component being opened without a trigger.

```jsx
<Root open={openState} onOpenChange={openStateToggle}>
  <Content>
    <Header>
      <Title>Modal without Trigger</Title>
    </Header>
    <Description>This modal is opened without a trigger button.</Description>
    <Footer>
      <Close asChild>
        <button>Close</button>
      </Close>
    </Footer>
  </Content>
</Root>
```

## Contributing

To add a new variant for Modal component is handled in `Content` component.
