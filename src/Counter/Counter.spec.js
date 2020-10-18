import React from 'react';
import { renderWithTheme } from '../../test/utils';

import Counter from './Counter';

describe('<Counter />', () => {
  it('should render', () => {
    const { container } = renderWithTheme(<Counter />);
    const counter = container.firstChild;

    expect(counter).toBeInTheDocument();
  });

  it('should handle custom style', () => {
    const { container } = renderWithTheme(
      <Counter style={{ backgroundColor: 'papayawhip' }} />
    );
    const counter = container.firstChild;

    expect(counter).toHaveAttribute('style', 'background-color: papayawhip;');
  });

  it('should handle custom props', () => {
    const customProps = { title: 'potatoe' };
    const { container } = renderWithTheme(<Counter {...customProps} />);
    const counter = container.firstChild;

    expect(counter).toHaveAttribute('title', 'potatoe');
  });

  describe('prop: minLength', () => {
    it('renders correct number of digits', () => {
      const { container } = renderWithTheme(
        <Counter value={32} minLength={7} />
      );
      const counter = container.firstChild;

      expect(counter.childElementCount).toBe(7);
    });

    it('value length takes priority if bigger than minLength', () => {
      const { container } = renderWithTheme(
        <Counter value={1234} minLength={2} />
      );
      const counter = container.firstChild;

      expect(counter.childElementCount).toBe(4);
    });
  });
});
