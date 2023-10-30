import { act, fireEvent, render, screen } from '@testing-library/react';

import { ToggleButton } from './ToggleButton';

const handleToggleMenu = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

describe('ToggleButton', () => {
  it('should render close icon when isOpenMenu is true', () => {
    const props = {
      isOpenMenu: true,
      handleToggleMenu
    };
    render(<ToggleButton {...props} />);
    const closeIcon = screen.getByTestId('close-icon');
    const closeButton = screen.getByRole('button', { name: /fechar menu/i });

    act(() => {
      fireEvent.click(closeIcon);
    });

    expect(closeIcon).toBeVisible();
    expect(closeButton).toBeVisible();
    expect(handleToggleMenu).toHaveBeenCalledTimes(1);
  });

  it('should render open icon when isOpenMenu is false', () => {
    const props = {
      isOpenMenu: false,
      handleToggleMenu
    };
    render(<ToggleButton {...props} />);
    const openIcon = screen.getByTestId('open-icon');
    const openButton = screen.getByRole('button', { name: /abrir menu/i });

    act(() => {
      fireEvent.click(openIcon);
    });

    expect(openIcon).toBeVisible();
    expect(openButton).toBeVisible();
    expect(handleToggleMenu).toHaveBeenCalledTimes(1);
  });
});
