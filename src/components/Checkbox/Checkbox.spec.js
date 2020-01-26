import React from 'react';
import { renderWithTheme } from '../../../test/utils';
import Checkbox from './Checkbox';

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

  describe('onChange', () => {
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

  describe('disabled', () => {
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
  describe('controlled', () => {
    it('should check the checkbox', () => {
      const { getByRole, rerender } = renderWithTheme(
        <Checkbox checked={false} />
      );

      rerender(<Checkbox checked />);
      const checkbox = getByRole('checkbox');

      expect(checkbox.checked).toBe(true);
      expect(getByRole('checkbox')).toHaveAttribute('checked');
      //   check if proper icon was rendered
    });

    it('should uncheck the checkbox', () => {
      const { getByRole, rerender } = renderWithTheme(<Checkbox checked />);
      rerender(<Checkbox checked={false} />);
      const checkbox = getByRole('checkbox');

      expect(checkbox.checked).toBe(false);
      expect(getByRole('checkbox')).not.toHaveAttribute('checked');

      //   check if proper icon was rendered
    });
  });

  describe('uncontrolled', () => {
    it('can change checked state uncontrolled starting from defaultChecked', () => {
      const { getByRole } = renderWithTheme(<Checkbox defaultChecked />);
      const checkbox = getByRole('checkbox');

      expect(checkbox.checked).toBe(true);
      //   expect(getByTestId('checked-icon')).to.be.ok;

      checkbox.click();

      expect(checkbox.checked).toBe(false);
      //   expect(getByTestId('unchecked-icon')).to.be.ok;

      checkbox.click();

      expect(checkbox.checked).toBe(true);
      //   expect(getByTestId('checked-icon')).to.be.ok;
    });
  });
});
