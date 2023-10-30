import { NavItem } from '@/types';
import { fireEvent, render, screen } from '@testing-library/react';

import { MainNav } from './MainNav';

const mockItems: NavItem[] = [
  { title: 'Item 1', href: '/item1' },
  { title: 'Item 2', href: '/item2' }
];

describe('MainNav', () => {
  it('should render title', () => {
    render(<MainNav items={mockItems} />);

    const title = screen.getByRole('heading', { name: /menu de navegação/i });

    expect(title).toBeInTheDocument();
  });

  it('should render list items', () => {
    render(<MainNav items={mockItems} />);

    const item1 = screen.getByText('Item 1');
    const item2 = screen.getByText('Item 2');

    expect(item1).toBeVisible();
    expect(item2).toBeVisible();
  });

  it('should render toggle menu with open icon', () => {
    render(<MainNav items={mockItems} />);

    const openIcon = screen.getByTestId('open-icon');

    expect(openIcon).toBeVisible();
  });

  it('should render list items when mobile menu is open', () => {
    render(<MainNav items={mockItems} />);

    const openIcon = screen.getByTestId('open-icon');
    fireEvent.click(openIcon);

    const items1 = screen.queryAllByText('Item 1');
    const items2 = screen.queryAllByText('Item 2');

    expect(items1).toHaveLength(2);
    expect(items2).toHaveLength(2);
  });

  it('should close mobile menu when a mobile item is clicked', () => {
    render(<MainNav items={mockItems} />);

    const openIcon = screen.getByTestId('open-icon');
    fireEvent.click(openIcon);

    const items = screen.queryAllByText('Item 1');
    expect(items).toHaveLength(2);

    const mobileItem = items[1];
    fireEvent.click(mobileItem);

    const itemsAfterClick = screen.queryAllByText('Item 1');
    expect(itemsAfterClick).toHaveLength(1);
  });
});
