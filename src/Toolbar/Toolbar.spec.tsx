import { render } from '@testing-library/react';
import React from 'react';

import { Toolbar } from './Toolbar';

describe('<Toolbar />', () => {
  it('should render', () => {
    const { container } = render(<Toolbar />);
    const toolbar = container.firstChild;

    expect(toolbar).toBeInTheDocument();
  });

  it('should render children', () => {
    const { container } = render(<Toolbar>A nice app bar</Toolbar>);
    const toolbar = container.firstChild;

    expect(toolbar).toHaveTextContent('A nice app bar');
  });

  describe('prop: noPadding', () => {
    it('should apply 0 padding', () => {
      const { container } = render(<Toolbar noPadding />);
      const toolbar = container.firstChild;

      expect(toolbar).toHaveStyleRule('padding', '0');
    });
  });

  describe('prop: onOutsideClick', () => {
    it('should fire callback on container click', () => {
      const mockCallBack = jest.fn();
      const { container } = render(<Toolbar onOutsideClick={mockCallBack} />);

      container.click();

      expect(mockCallBack).toHaveBeenCalled();
    });
  });
});
