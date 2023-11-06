# Coinshift Component Library(Assignment)

This project is scaffolded using Vite, styled with Tailwind CSS, documented with Storybook, and tested with Jest and React Testing Library. It leverages Radix-UI and Shadcn/ui as base components to enhance its functionality and styling.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Documentation](#documentation)
3. [Testing](#testing)
4. [Contributing](#contributing)

## Getting Started

Before you begin, ensure that you have Node.js(`v18.18.0`) and Yarn(`v4.0.1`) installed on your machine.
Once they are available the install all the dependencies using:

```sh
yarn install

# or just
yarn
```

### Documentation

We use Storybook for component documentation. To run Storybook, use:

```bash
yarn storybook
```

This opens Storybook in your web browser, enabling you to see and interact with the components in various states.

`Note`: Since we are using custom tailwind theme config I am building tailwind.css file for applying the new classes
Tried figuring out a solution but couldn't due to time constraints.

### Testing

Testing is set up using Jest and React Testing Library. Run the test suite with:

```bash
yarn test
```

### Contributing

**TODOs**:

1. Custom tailwind theme config to storybook
2. `twMerge` issues with custom tailwind theme. Need to extend `twMerge` using `extendTailwindMerge`
3. Path alias config to Jest
4. Extract Jest config from `package.json` to `jest.config.ts`
