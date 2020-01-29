import React from 'react';

import { renderWithTheme } from '../../../test/utils';
import LoadingIndicator from './LoadingIndicator';

describe('<LoadingIndicator />', () => {
  it('renders LoadingIndicator', () => {
    const { getByRole } = renderWithTheme(<LoadingIndicator />);

    const progress = getByRole('progressbar');

    expect(progress).toBeInTheDocument();
  });

  describe('prop: isLoading', () => {
    it('when set to false, does not display progress bars', () => {
      const { getByRole, rerender } = renderWithTheme(<LoadingIndicator />);

      expect(getByRole('progressbar').firstChild).not.toBeNull();

      rerender(<LoadingIndicator isLoading={false} />);

      expect(getByRole('progressbar').firstChild).toBeNull();
    });
  });
});
