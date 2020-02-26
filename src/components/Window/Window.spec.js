import React from 'react';

import { renderWithTheme } from '../../../test/utils';

import Window from './Window';

describe('<Window />', () => {
  it('renders Window', () => {
    const { container } = renderWithTheme(<Window />);
    const window = container.firstChild;

    expect(window).toBeInTheDocument();
  });

  it('renders children', () => {
    const textContent = 'Hi there!';
    const { getByText } = renderWithTheme(
      <Window>
        <span>{textContent}</span>
      </Window>
    );
    expect(getByText(textContent)).toBeInTheDocument();
  });

  describe('prop: resizable', () => {
    it('does not render resize handle by default', () => {
      const { queryByTestId } = renderWithTheme(<Window />);

      expect(queryByTestId('resizeHandle')).not.toBeInTheDocument();
    });
    it('renders resize handle when set to true', () => {
      const { queryByTestId } = renderWithTheme(<Window resizable />);

      expect(queryByTestId('resizeHandle')).toBeInTheDocument();
    });
  });
});
