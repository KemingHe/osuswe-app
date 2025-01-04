import { type RenderResult, render, screen } from '@testing-library/react';

import MainTitle from '@/components/homepage/main/MainTitle';

vi.mock('next/font/local', () => ({
  __esModule: true,
  default: () => ({
    className: 'test-font-class',
  }),
}));

const hiddenTextSelector: string = 'span.sr-only';
const visibleTextSelector: string = 'span[aria-hidden="true"]';

describe('MainTitle component', () => {
  it('renders the hidden and visible text correctly', () => {
    render(<MainTitle />);

    // Verify that custom font class is present.
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toHaveClass('test-font-class');

    // Verify that the hidden text is present.
    const hiddenText = screen.getByText('Society of Women Engineers', {
      selector: hiddenTextSelector,
    });
    expect(hiddenText).toBeVisible();

    // Verify that the visible text is present.
    const visibleTextPart1 = screen.getByText('Society of', {
      selector: visibleTextSelector,
    });
    const visibleTextPart2 = screen.getByText('Women Engineers', {
      selector: visibleTextSelector,
    });
    expect(visibleTextPart1).toBeVisible();
    expect(visibleTextPart2).toBeVisible();

    // Verify the static text.
    const staticText = screen.getByText('at The Ohio State University');
    expect(staticText).toBeVisible();
  });

  it('matches the snapshot', () => {
    const { asFragment }: RenderResult = render(<MainTitle />);
    expect(asFragment()).toMatchSnapshot();
  });
});
