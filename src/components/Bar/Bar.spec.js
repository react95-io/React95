import React from 'react';
import { render } from '@testing-library/react';
import { blockSizes } from '../common/system';

import Bar from './Bar';

describe('<Bar />', () => {
  it('should render bar', () => {
    const { container } = render(<Bar />);
    const barEl = container.firstChild;

    expect(barEl).toBeInTheDocument();
  });

  it('should handle bar with correct size', () => {
    const { container, rerender } = render(<Bar size='sm' />);
    const barEl = container.firstChild;

    expect(barEl).toHaveStyleRule('height', blockSizes.sm);

    rerender(<Bar size='lg' />);

    expect(barEl).toHaveStyleRule('height', blockSizes.lg);
  });

  it('should handle custom style', () => {
    const { container } = render(
      <Bar style={{ backgroundColor: 'papayawhip' }} />
    );
    const barEl = container.firstChild;

    expect(barEl).toHaveAttribute('style', 'background-color: papayawhip;');
  });

  it('should handle custom props', () => {
    const customProps = { title: 'potatoe' };
    const { container } = render(<Bar {...customProps} />);
    const barEl = container.firstChild;

    expect(barEl).toHaveAttribute('title', 'potatoe');
  });
});
