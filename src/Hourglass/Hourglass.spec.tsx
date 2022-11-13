import { render } from '@testing-library/react';
import React from 'react';

import { Hourglass } from './Hourglass';

describe('<Hourglass />', () => {
  it('should render hourglass', () => {
    const { container } = render(<Hourglass />);
    const hourglass = container.firstElementChild;

    expect(hourglass).toBeInTheDocument();
  });

  it('should render correct size', () => {
    const { container } = render(<Hourglass size='66px' />);
    const hourglass = container.firstElementChild;

    const computedStyles = hourglass
      ? window.getComputedStyle(hourglass)
      : null;
    expect(computedStyles?.width).toBe('66px');
    expect(computedStyles?.height).toBe('66px');
  });

  it('should handle custom props', () => {
    const customProps: React.HTMLAttributes<HTMLSpanElement> = {
      title: 'hourglass'
    };
    const { container } = render(<Hourglass {...customProps} />);
    const hourglass = container.firstElementChild;

    expect(hourglass).toHaveAttribute('title', 'hourglass');
  });
});
