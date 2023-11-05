import { Modal } from '@@/UIKit/ui';
import { Button } from '@@/UIKit/ui/button';

import { useState } from 'react';

const ModalWrapper = () => {
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
    <div className="flex gap-4 p-4 flex-wrap">
      <Modal.Root>
        <Modal.Trigger asChild>
          <Button variant="outline">Open Modal</Button>
        </Modal.Trigger>

        <Modal.Content size="md">
          <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
          </Modal.Header>

          <p className="text-t-sm">
            Lorem ipsum dolor sit tortor viverra commodo. Etiam non orci metus. Praesent et ex
            lorem. Curabitur ornare venenatis ornare. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Suspendisse potenti.
          </p>

          <p className="text-t-sm">
            Vestibulum velit nisl, vehicula sed convallis vitae, malesuada id felis. Donec fringilla
            pretium justo et rutrum. Donec id ipsum orci. Pellentesque iaculis vehicula tellus quis
            rhoncus.lacerat a velit a, auctor vehicula lectus.
          </p>

          <Modal.Footer>
            <Modal.Close asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </Modal.Close>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Root>

      <Button variant="outline" onClick={mockAsync} className="w-[180px]">
        {isBusy ? 'Awaiting...' : 'Auto open after 1s'}
      </Button>

      <Modal.Root open={isModalOpen} onOpenChange={toggleIsModalOpen}>
        <Modal.Content size="lg">
          <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
          </Modal.Header>

          <p className="text-t-sm">
            Lorem ipsum dolor sit tortor viverra commodo. Etiam non orci metus. Praesent et ex
            lorem. Curabitur ornare venenatis ornare. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Suspendisse potenti.
          </p>

          <p className="text-t-sm">
            Vestibulum velit nisl, vehicula sed convallis vitae, malesuada id felis. Donec fringilla
            pretium justo et rutrum. Donec id ipsum orci. Pellentesque iaculis vehicula tellus quis
            rhoncus.lacerat a velit a, auctor vehicula lectus.
          </p>

          <Modal.Footer>
            <Modal.Close asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </Modal.Close>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Root>
    </div>
  );
};
ModalWrapper.displayName = 'ModalWarpper';

export default ModalWrapper;
