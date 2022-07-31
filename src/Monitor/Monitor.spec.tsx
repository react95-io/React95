import React from 'react';

import { renderWithTheme } from '../../test/utils';

import { Monitor } from './Monitor';

describe('<Monitor />', () => {
  it('should render', () => {
    const { container } = renderWithTheme(<Monitor />);
    const monitorElement = container.firstElementChild;

    expect(monitorElement).toBeInTheDocument();
  });

  it('should handle custom props', () => {
    const customProps: React.HTMLAttributes<HTMLDivElement> = {
      title: 'potatoe'
    };
    const { container } = renderWithTheme(<Monitor {...customProps} />);
    const monitorElement = container.firstElementChild;

    expect(monitorElement).toHaveAttribute('title', 'potatoe');
  });

  describe('prop: backgroundStyles', () => {
    it('should forward styles to background element', () => {
      const { getByTestId } = renderWithTheme(
        <Monitor backgroundStyles={{ backgroundColor: 'papayawhip' }} />
      );
      const backgroundElement = getByTestId('background');

      expect(backgroundElement).toHaveAttribute(
        'style',
        'background-color: papayawhip;'
      );
    });
  });

  describe('prop: children', () => {
    it('children should be rendered in background element', () => {
      const { getByTestId } = renderWithTheme(<Monitor>Hi!</Monitor>);
      const backgroundElement = getByTestId('background');

      expect(backgroundElement.innerHTML).toBe('Hi!');
    });
  });
});
