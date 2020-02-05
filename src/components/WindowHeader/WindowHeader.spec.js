import React from 'react';

import { renderWithTheme } from '../../../test/utils';

import WindowHeader from './WindowHeader';

describe('<WindowHeader />', () => {
  it('renders WindowHeader', () => {
    const { container } = renderWithTheme(<WindowHeader />);
    const windowHeader = container.firstChild;

    expect(windowHeader).toBeInTheDocument();
  });

  it('renders children', () => {
    const textContent = 'Hi there!';
    const { getByText } = renderWithTheme(
      <WindowHeader>
        <span>{textContent}</span>
      </WindowHeader>
    );
    expect(getByText(textContent)).toBeInTheDocument();
  });

  //   describe('prop: isActive', () => {
  //     it('displays active header by default', () => {
  //       const { container } = renderWithTheme(<WindowHeader />);
  //       const windowHeader = container.firstChild;

  //       expect(windowHeader).toHaveAttribute('data-testid', 'activeHeader');
  //     });

  //     it('renders non-active header when set to false', () => {
  //       const { container } = renderWithTheme(<WindowHeader isActive={false} />);
  //       const windowHeader = container.firstChild;

  //       expect(windowHeader).toHaveAttribute('data-testid', 'notActiveHeader');
  //     });
  //   });
});
