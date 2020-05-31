import React from 'react';
import { render } from '@testing-library/react';

import Hourglass from './Hourglass';

describe('<Hourglass />', () => {
  it('should render hourglass', () => {
    const { container } = render(<Hourglass />);
    const barEl = container.firstChild;

    expect(barEl).toBeInTheDocument();
  });

  it('should render correct size', () => {
    const { container } = render(<Hourglass size='66px' />);
    const hourglass = container.firstChild;

    const computedStyles = window.getComputedStyle(hourglass);
    expect(computedStyles.width).toBe('66px');
    expect(computedStyles.height).toBe('66px');
  });

  it('should handle custom props', () => {
    const customProps = { alt: 'hourglass' };
    const { container } = render(<Hourglass {...customProps} />);
    const hourglass = container.firstChild;

    expect(hourglass).toHaveAttribute('alt', 'hourglass');
  });
});
