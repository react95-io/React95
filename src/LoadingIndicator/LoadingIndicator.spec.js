import React from 'react';

import { renderWithTheme } from '../../test/utils';
import LoadingIndicator from './LoadingIndicator';

describe('<LoadingIndicator />', () => {
  it('renders LoadingIndicator', () => {
    const { getByRole } = renderWithTheme(<LoadingIndicator />);

    const progress = getByRole('progressbar');

    expect(progress).toBeInTheDocument();
  });

  describe('prop: isLoading', () => {
    it('when set to false, does not display progress bars', () => {
      const { rerender, queryByTestId } = renderWithTheme(<LoadingIndicator />);

      expect(queryByTestId('loading-wrapper')).not.toBeNull();

      rerender(<LoadingIndicator isLoading={false} />);

      expect(queryByTestId('loading-wrapper')).toBeNull();
    });
  });
});
