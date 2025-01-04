import { type RenderResult, render, screen } from '@testing-library/react';
import React, { type JSX } from 'react';

import {
  BottomNavItem,
  type BottomNavItemProps,
} from '@/components/bottomNav/BottomNavItem';

const mockHref: string = '/test-path';
const mockNavIconTestId: string = 'mock-nav-icon';
const mockLabel: string = 'Test';
const mockAriaLabel: string = 'To test page';
const mockIsActive: boolean = false;

function MockNavIcon({ className }: { className: string }): JSX.Element {
  return <svg className={className} data-testid={mockNavIconTestId} />;
}

// biome-ignore format: added alignment for clarity.
const testProps: BottomNavItemProps = {
  href     : mockHref,
  NavIcon  : MockNavIcon,
  label    : mockLabel,
  ariaLabel: mockAriaLabel,
  isActive : mockIsActive,
};

describe('BottomNavItem component', () => {
  it('renders correctly with test props', () => {
    render(<BottomNavItem {...testProps} />);

    // Verify that the link has the correct href and aria-label.
    const linkElement = screen.getByRole('link', { name: mockAriaLabel });
    expect(linkElement).toBeVisible();
    expect(linkElement).toHaveAttribute('href', mockHref);

    // Verify that the NavIcon and label are visible.
    expect(screen.getByTestId(mockNavIconTestId)).toBeVisible();
    expect(screen.getByText(mockLabel)).toBeVisible();
  });

  it('applies active styles when isActive is true', () => {
    render(<BottomNavItem {...testProps} isActive={true} />);
    const linkElement = screen.getByRole('link', { name: mockAriaLabel });
    expect(linkElement).toHaveClass(
      'active border-t-4 text-accent font-semibold bg-gradient-to-b from-secondary via-base-100 to-base-100',
    );
    expect(screen.getByTestId(mockNavIconTestId)).toHaveClass('size-6');
  });

  it('applies inactive styles when isActive is false', () => {
    render(<BottomNavItem {...testProps} isActive={false} />);
    const linkElement = screen.getByRole('link', { name: mockAriaLabel });
    expect(linkElement).toHaveClass('text-primary border-t-2 border-secondary');
    expect(screen.getByTestId(mockNavIconTestId)).toHaveClass('size-5');
  });

  it('matches the snapshot', () => {
    const { asFragment }: RenderResult = render(
      <BottomNavItem {...testProps} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
