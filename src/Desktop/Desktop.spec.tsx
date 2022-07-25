import React from 'react';
import { renderWithTheme } from '../../test/utils';

import { Desktop } from './Desktop';

describe('<Desktop />', () => {
  it('should render', () => {
    const { container } = renderWithTheme(<Desktop />);
    const desktopElement = container.firstElementChild;

    expect(desktopElement).toBeInTheDocument();
  });

  it('should handle custom props', () => {
    const customProps: React.HTMLAttributes<HTMLDivElement> = {
      title: 'potatoe'
    };
    const { container } = renderWithTheme(<Desktop {...customProps} />);
    const desktopElement = container.firstElementChild;

    expect(desktopElement).toHaveAttribute('title', 'potatoe');
  });

  describe('prop: backgroundStyles', () => {
    it('should forward styles to background element', () => {
      const { getByTestId } = renderWithTheme(
        <Desktop backgroundStyles={{ backgroundColor: 'papayawhip' }} />
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
      const { getByTestId } = renderWithTheme(<Desktop>Hi!</Desktop>);
      const backgroundElement = getByTestId('background');

      expect(backgroundElement.innerHTML).toBe('Hi!');
    });
  });
});
