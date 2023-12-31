import { render, screen } from '@testing-library/react';

import { Logo } from './Logo';

describe('Logo', () => {
  it('should render successfully', () => {
    render(<Logo />);

    const logoText = screen.getByRole('heading', { name: /andrew rosário/i });
    expect(logoText).toBeVisible();
  });
});
