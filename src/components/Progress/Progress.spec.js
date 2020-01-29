import React from 'react';

import { renderWithTheme } from '../../../test/utils';
import Progress from './Progress';

describe('<Progress />', () => {
  it('renders Progress', () => {
    const value = 32;
    const { getByRole } = renderWithTheme(<Progress value={value} />);

    const progress = getByRole('progressbar');

    expect(progress).toBeInTheDocument();
    expect(progress).toHaveAttribute('aria-valuenow', value.toString());
  });

  it('displays current percentage value', () => {
    const value = 32;
    const { queryByTestId } = renderWithTheme(<Progress value={value} />);

    expect(queryByTestId('defaultProgress1').textContent).toBe(`${value}%`);
    expect(queryByTestId('defaultProgress2').textContent).toBe(`${value}%`);

    expect(queryByTestId('defaultProgress2')).toHaveStyleRule(
      'clip-path',
      `polygon( 0 0,${value}% 0,${value}% 100%,0 100% )`
    );

    expect(queryByTestId('indeterminateProgress')).not.toBeInTheDocument();
  });

  describe('prop: hideValue', () => {
    it('renders progress bars, but does not show value', () => {
      const value = 32;
      const { queryByTestId } = renderWithTheme(
        <Progress hideValue value={value} />
      );
      expect(queryByTestId('defaultProgress1')).toBeInTheDocument();
      expect(queryByTestId('defaultProgress2')).toBeInTheDocument();
      expect(queryByTestId('defaultProgress1')).toBeEmpty();
      expect(queryByTestId('defaultProgress2')).toBeEmpty();
    });
  });
});
