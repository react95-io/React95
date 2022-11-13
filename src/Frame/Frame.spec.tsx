import { render } from '@testing-library/react';
import React from 'react';

import { Frame } from './Frame';

describe('<Frame />', () => {
  it('should render frame', () => {
    const { container } = render(<Frame />);
    const frame = container.firstElementChild;

    expect(frame).toBeInTheDocument();
  });

  it('should render custom styles', () => {
    const { container } = render(
      <Frame style={{ backgroundColor: 'papayawhip' }} />
    );
    const frame = container.firstElementChild;

    expect(frame).toHaveAttribute('style', 'background-color: papayawhip;');
  });

  it('should render children', async () => {
    const { findByText } = render(
      <Frame>
        <span>Cool frame</span>
      </Frame>
    );
    const content = await findByText(/cool frame/i);

    expect(content).toBeInTheDocument();
  });

  it('should render custom props', () => {
    const customProps = { title: 'frame' };
    const { container } = render(<Frame {...customProps} />);
    const frame = container.firstElementChild;

    expect(frame).toHaveAttribute('title', 'frame');
  });
});
