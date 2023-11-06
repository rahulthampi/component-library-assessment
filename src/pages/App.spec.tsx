import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders the App component with ModalWrapper and CardWrapper', () => {
    const wrapper = render(<App />);

    expect(wrapper).toMatchSnapshot();

    // Check if both ModalWrapper and CardWrapper components are rendered.
    const modalWrapper = screen.getByTestId('modal-wrapper');
    const cardWrapper = screen.getByTestId('card-wrapper');

    expect(modalWrapper).toBeInTheDocument();
    expect(cardWrapper).toBeInTheDocument();
  });
});
