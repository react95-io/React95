import React from 'react';

import { renderWithTheme } from '../../test/utils';
import { Checkbox } from './Checkbox';

describe('<Checkbox />', () => {
  describe('label', () => {
    it('renders', () => {
      const labelText = 'Swag';
      const { getByLabelText } = renderWithTheme(
        <Checkbox label={labelText} />
      );
      expect(getByLabelText(labelText)).toBeInTheDocument();
    });
  });

  describe('prop: onChange', () => {
    it('should call onChange when uncontrolled', () => {
      const handleChange = jest.fn(event => event.target.checked);
      const { getByRole } = renderWithTheme(
        <Checkbox onChange={handleChange} />
      );

      getByRole('checkbox').click();

      expect(handleChange).toHaveBeenCalledTimes(1);
      // event.target.check is true
      expect(handleChange.mock.results[0].value).toBe(true);
    });

    it('should call onChange when controlled', () => {
      const checked = true;
      const handleChange = jest.fn(event => event.target.checked);

      const { getByRole } = renderWithTheme(
        <Checkbox onChange={handleChange} checked={checked} />
      );

      getByRole('checkbox').click();

      expect(handleChange).toHaveBeenCalledTimes(1);

      expect(handleChange.mock.results[0].value).toBe(!checked);
    });
  });

  describe('prop: disabled', () => {
    it('should disable checkbox', () => {
      const handleChange = jest.fn();

      const { getByRole } = renderWithTheme(
        <Checkbox disabled onChange={handleChange} />
      );
      const checkbox = getByRole('checkbox');
      expect(checkbox).toHaveAttribute('disabled');

      checkbox.click();
      expect(handleChange).not.toHaveBeenCalled();
    });
    it('should be overridden by props', () => {
      const { getByRole, rerender } = renderWithTheme(<Checkbox disabled />);
      rerender(<Checkbox disabled={false} />);
      const checkbox = getByRole('checkbox');
      expect(checkbox).not.toHaveAttribute('disabled');
    });
  });
  describe('prop: indeterminate', () => {
    it('renders indeterminate state', () => {
      const { getByRole } = renderWithTheme(<Checkbox indeterminate />);
      const checkbox = getByRole('checkbox');

      // don't set native 'indeterminate' attribute because
      // different browsers treat it differently
      // instead we're setting 'data-indeterminate' attribute
      expect(checkbox).toHaveAttribute('data-indeterminate');
      expect(checkbox).not.toHaveAttribute('indeterminate');

      expect(getByRole('presentation').firstChild).toHaveAttribute(
        'data-testid',
        'indeterminateIcon'
      );
    });
    it('replaces checked icon', () => {
      const { getByRole, rerender } = renderWithTheme(<Checkbox checked />);

      expect(getByRole('checkbox')).toHaveAttribute(
        'data-indeterminate',
        'false'
      );

      rerender(<Checkbox checked indeterminate />);

      expect(getByRole('checkbox')).toHaveAttribute(
        'data-indeterminate',
        'true'
      );
      expect(getByRole('presentation').firstChild).toHaveAttribute(
        'data-testid',
        'indeterminateIcon'
      );
    });
  });
  describe('controlled', () => {
    it('should check the checkbox', () => {
      const { getByRole, rerender } = renderWithTheme(
        <Checkbox checked={false} />
      );

      rerender(<Checkbox checked />);
      const checkbox = getByRole('checkbox') as HTMLInputElement;

      expect(checkbox.checked).toBe(true);
      expect(getByRole('checkbox')).toHaveAttribute('checked');
      expect(getByRole('presentation').firstChild).toHaveAttribute(
        'data-testid',
        'checkmarkIcon'
      );
    });

    it('should uncheck the checkbox', () => {
      const { getByRole, rerender } = renderWithTheme(<Checkbox checked />);
      rerender(<Checkbox checked={false} />);
      const checkbox = getByRole('checkbox') as HTMLInputElement;

      expect(checkbox.checked).toBe(false);
      expect(getByRole('checkbox')).not.toHaveAttribute('checked');
      expect(getByRole('presentation').firstChild).toBeNull();
      //   check if proper icon was rendered
    });
  });

  describe('uncontrolled', () => {
    it('can change checked state uncontrolled starting from defaultChecked', () => {
      const { getByRole } = renderWithTheme(<Checkbox defaultChecked />);
      const checkbox = getByRole('checkbox') as HTMLInputElement;

      expect(checkbox.checked).toBe(true);

      checkbox.click();

      expect(checkbox.checked).toBe(false);

      checkbox.click();

      expect(checkbox.checked).toBe(true);
    });
  });
});
