import React from 'react';

import { renderWithTheme } from '../../test/utils';
import DatePicker from './DatePicker';

describe('<DatePicker />', () => {
  it('should call onAccept correctly', () => {
    const handleAccept = jest.fn();

    const { getByTestId } = renderWithTheme(
      <DatePicker onAccept={handleAccept} />
    );

    const okButton = getByTestId('ok');
    okButton.click();
    expect(handleAccept).toHaveBeenCalledTimes(1);
  });

  it('should call onCancel correctly', () => {
    const handleCancel = jest.fn();

    const { getByTestId } = renderWithTheme(
      <DatePicker onCancel={handleCancel} />
    );

    const cancelButton = getByTestId('cancel');
    cancelButton.click();
    expect(handleCancel).toHaveBeenCalledTimes(1);
  });
});
