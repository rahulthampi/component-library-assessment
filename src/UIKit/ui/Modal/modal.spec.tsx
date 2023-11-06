import { render, screen, fireEvent } from '@testing-library/react';
import { toMatchDiffSnapshot } from 'snapshot-diff';
import '@testing-library/jest-dom';

import * as Modal from './modal';
import { Button } from '../button';

expect.extend({ toMatchDiffSnapshot });

const Trigger = () => {
  return (
    <Modal.Trigger asChild>
      <Button variant="outline">Open Modal</Button>
    </Modal.Trigger>
  );
};

const Title = () => {
  return (
    <Modal.Header>
      <Modal.Title>Modal Title</Modal.Title>
    </Modal.Header>
  );
};

const Content = () => {
  return (
    <>
      <p className="text-t-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget purus sagittis,
        egestas purus at, interdum nisi. Vestibulum varius dolor sem, non faucibus justo accumsan
        vitae. Nullam ut quam pretium nisi laoreet viverra vitae nec massa. Quisque volutpat
        vulputate dui, ac malesuada lectus. Suspendisse quis eros a tortor viverra commodo. Etiam
        non orci metus. Praesent et ex lorem. Curabitur ornare venenatis ornare. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti.
      </p>

      <p className="text-t-sm">
        Vestibulum velit nisl, vehicula sed convallis vitae, malesuada id felis. Donec fringilla
        pretium justo et rutrum. Donec id ipsum orci. Pellentesque iaculis vehicula tellus quis
        rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Sed semper, purus eu porttitor interdum, mauris lacus pharetra arcu, et congue
        est neque a tortor. Nam sit amet neque quam. Phasellus est felis, placerat in orci et,
        lacinia convallis lorem. Duis mi lectus, placerat a velit a, auctor vehicula lectus.
      </p>
    </>
  );
};

const Footer = () => {
  return (
    <Modal.Footer>
      <Modal.Close asChild>
        <Button type="button" variant="secondary">
          Close Modal
        </Button>
      </Modal.Close>
    </Modal.Footer>
  );
};

describe('UIKit/Modal', () => {
  it('should render only the trigger and no modal content', () => {
    const rendered = render(
      <Modal.Root>
        <Trigger />

        <Modal.Content>
          <Title />

          <Content />

          <Footer />
        </Modal.Content>
      </Modal.Root>,
    );

    expect(rendered).toMatchSnapshot();

    expect(screen.getByRole('button')).not.toBeDisabled();

    expect(screen.queryByText('Modal Title')).not.toBeInTheDocument();
  });

  it.each([
    ['sm', 'max-w-[400px]'] as const,
    ['md', 'max-w-[600px]'] as const,
    ['lg', 'max-w-[960px]'] as const,
    ['xl', 'max-w-[1248px]'] as const,
  ])(
    'should open modal(of size: %s) and close the modal when Trigger and Close are clicked',
    (size, expectedClass) => {
      const { asFragment } = render(
        <Modal.Root>
          <Trigger />

          <Modal.Content size={size}>
            <Title />

            <Content />

            <Footer />
          </Modal.Content>
        </Modal.Root>,
      );

      const noContentRender = asFragment();

      const openButton = screen.getByText('Open Modal');

      // Click the open button to open the modal.
      fireEvent.click(openButton);

      expect(noContentRender).toMatchDiffSnapshot(asFragment());

      const closeButton = screen.getByText('Close Modal');

      expect(screen.getByText('Modal Title')).toBeInTheDocument();
      expect(closeButton).toBeInTheDocument();
      expect(screen.getByTestId('modal-content')).toHaveClass(expectedClass);

      // Click the close button to close the modal.
      fireEvent.click(closeButton);
      expect(screen.queryByText('Modal Title')).not.toBeInTheDocument();
    },
  );
});
