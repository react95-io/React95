import { render } from '@testing-library/react';

import { Anchor } from './Anchor';

const defaultProps = {
  children: '',
  href: ''
};

describe('<Anchor />', () => {
  it('should render href', () => {
    const { container } = render(
      <Anchor {...defaultProps} href='http://yoda.com' />
    );
    const anchorEl = container.firstChild;

    expect(anchorEl).toHaveAttribute('href', 'http://yoda.com');
  });

  it('should render children', () => {
    const { container } = render(
      <Anchor {...defaultProps}>You shall pass</Anchor>
    );
    const anchorEl = container.firstChild;

    expect(anchorEl).toHaveTextContent('You shall pass');
  });

  it('should render custom style', () => {
    const { container } = render(
      <Anchor {...defaultProps} style={{ color: 'papayawhip' }} />
    );
    const anchorEl = container.firstChild;

    expect(anchorEl).toHaveAttribute('style', 'color: papayawhip;');
  });

  it('should render custom props', () => {
    const customProps = { target: '_blank' };
    const { container } = render(<Anchor {...defaultProps} {...customProps} />);
    const anchorEl = container.firstChild;

    expect(anchorEl).toHaveAttribute('target', '_blank');
  });
});
