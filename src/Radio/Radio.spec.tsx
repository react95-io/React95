import React from 'react';

import { renderWithTheme } from '../../test/utils';
import { Radio } from './Radio';

describe('<Radio />', () => {
  describe('label', () => {
    it('renders', () => {
      const labelText = 'Swag';
      const { getByLabelText } = renderWithTheme(<Radio label={labelText} />);
      expect(getByLabelText(labelText)).toBeInTheDocument();
    });
  });

  describe('prop: onChange', () => {
    it('should be called when Radio is clicked', () => {
      const handleChange = jest.fn(event => event.target.checked);

      const { getByRole } = renderWithTheme(
        <Radio onChange={handleChange} value='swag' />
      );

      getByRole('radio').click();

      expect(handleChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('prop: disabled', () => {
    it('should disable radio', () => {
      const handleChange = jest.fn();

      const { getByRole } = renderWithTheme(<Radio disabled />);
      const checkbox = getByRole('radio');
      expect(checkbox).toHaveAttribute('disabled');

      checkbox.click();
      expect(handleChange).not.toHaveBeenCalled();
    });
    it('should be overridden by props', () => {
      const { getByRole, rerender } = renderWithTheme(<Radio disabled />);
      rerender(<Radio disabled={false} />);
      const checkbox = getByRole('radio');
      expect(checkbox).not.toHaveAttribute('disabled');
    });
  });

  describe('controlled', () => {
    it('should check the radio', () => {
      const { getByRole, rerender } = renderWithTheme(
        <Radio checked={false} readOnly />
      );

      rerender(<Radio checked readOnly />);
      const checkbox = getByRole('radio') as HTMLInputElement;

      expect(checkbox.checked).toBe(true);
      expect(getByRole('radio')).toHaveAttribute('checked');
      expect(getByRole('presentation').firstChild).toHaveAttribute(
        'data-testid',
        'checkmarkIcon'
      );
    });

    it('should uncheck the checkbox', () => {
      const { getByRole, rerender } = renderWithTheme(
        <Radio checked readOnly />
      );
      rerender(<Radio checked={false} readOnly />);
      const checkbox = getByRole('radio') as HTMLInputElement;

      expect(checkbox.checked).toBe(false);
      expect(getByRole('radio')).not.toHaveAttribute('checked');
      expect(getByRole('presentation').firstChild).toBeNull();
    });
  });
});
