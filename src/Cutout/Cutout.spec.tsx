import { render } from '@testing-library/react';
import React from 'react';

import { Cutout } from './Cutout';

describe('<Cutout />', () => {
  it('should render cutout', () => {
    const { container } = render(<Cutout />);
    const cutout = container.firstElementChild;

    expect(cutout).toBeInTheDocument();
  });

  it('should render custom styles', () => {
    const { container } = render(
      <Cutout style={{ backgroundColor: 'papayawhip' }} />
    );
    const cutout = container.firstElementChild;

    expect(cutout).toHaveAttribute('style', 'background-color: papayawhip;');
  });

  it('should render children', async () => {
    const { findByText } = render(
      <Cutout>
        <span>Cool cutout</span>
      </Cutout>
    );
    const content = await findByText(/cool cutout/i);

    expect(content).toBeInTheDocument();
  });

  it('should render custom props', () => {
    const customProps = { title: 'cutout' };
    const { container } = render(<Cutout {...customProps} />);
    const cutout = container.firstElementChild;

    expect(cutout).toHaveAttribute('title', 'cutout');
  });
});
