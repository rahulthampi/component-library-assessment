import { FC, ReactNode, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Plus } from 'lucide-react';

import { Button } from '@@/UIKit/ui/button';

import * as Modal from './modal';

/**
 * `Modal` is a window overlaid on either the primary window.
 * Windows under a modal dialog are inert. That is, users cannot interact with content outside an active dialog window.
 * Inert content outside an active dialog is typically visually obscured or dimmed so it is difficult to discern,
 * attempts to interact with the inert content or pressing of <kbd>Esc</kbd> key will cause the modal to close.
 *
 * <details>
 *   <summary>Best Practices</summary>
 *
 * ### Do's
 *
 * * Modal should always be wrapped with root(`Modal.Root`), which will contain a trigger(`Modal.Trigger`), content(`Modal.Content`).
 * * Modal consist of a header(`Modal.Header`), content(any component or an HTML element), and footer(`Modal.Footer`), which should all be included inside the content(`Modal.Content`).
 * * Wrap any element or component with `Modal.Close` to perform an action which closes the modal
 *
 * ### Don'ts
 * * Don't open a Modal from a Modal
 * * Don't use a Dialog with no focusable elements
 * * Do not toggle the component manually - use a trigger(Modal.Trigger), unless it is needed to toggle programmatically
 * </details>
 * <br />
 * ______
 *
 * <br />
 * ### Props
 *
 * TODO: Add props documentation
 *
 */

const meta: Meta = {
  title: 'UIKit/Modal',
  component: Modal.Content,
  parameters: {
    layout: 'centered', // Optional parameter to center the component in the Canvas
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    asChild: { control: 'boolean' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story<T extends typeof meta> = StoryObj<T>;

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
          Close
        </Button>
      </Modal.Close>
    </Modal.Footer>
  );
};

const WithTriggerTemplate: Story<Modal.ContentProps> = {
  render: ({ ...args }) => {
    return (
      <Modal.Root>
        <Modal.Trigger asChild>
          <Button variant="outline">Open Modal</Button>
        </Modal.Trigger>

        <Modal.Content {...args} />
      </Modal.Root>
    );
  },
};

const DelayedModal: FC<{ children: ReactNode }> = ({ children }) => {
  const [isBusy, setIsBusy] = useState(false);
  const [isModalOpen, toggleIsModalOpen] = useState(false);

  const mockAsync = () => {
    setIsBusy(true);

    setTimeout(() => {
      toggleIsModalOpen(true);
      setIsBusy(false);
    }, 1000);
  };

  return (
    <>
      <Button variant="outline" onClick={mockAsync} className="w-[180px]">
        {isBusy ? 'Awaiting...' : 'Auto open after 1s'}
      </Button>

      <Modal.Root open={isModalOpen} onOpenChange={toggleIsModalOpen}>
        {children}
      </Modal.Root>
    </>
  );
};

const WithoutTriggerTemplate: Story<Modal.ContentProps> = {
  render: ({ ...args }) => {
    return (
      <DelayedModal>
        <Modal.Content {...args} />
      </DelayedModal>
    );
  },
};

/**
 * Default usage of the `Modal` component with a trigger button to open the modal.
 */
export const Default = {
  ...WithTriggerTemplate,
  args: {
    children: (
      <>
        <Title />
        <Content />
        <Footer />
      </>
    ),
  },
};

/**
 * `Modal` component without the close icon.
 */
export const WithoutCloseIcon = {
  ...WithTriggerTemplate,
  args: {
    showClose: false,
    children: (
      <>
        <Title />
        <Content />
        <Footer />
      </>
    ),
  },
};

/**
 * `Modal` component with a custom close icon.
 */
export const WithCustomCloseIcon = {
  ...WithTriggerTemplate,
  args: {
    closeIcon: <Plus className="h-4 w-4" />,
    children: (
      <>
        <Title />
        <Content />
        <Footer />
      </>
    ),
  },
};

/**
 * `Modal` component being opened without a trigger.
 */
export const OpenWithoutTrigger = {
  ...WithoutTriggerTemplate,
  args: {
    children: (
      <>
        <Title />
        <Content />
        <Footer />
      </>
    ),
  },
};
