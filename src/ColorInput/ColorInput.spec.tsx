import { fireEvent } from '@testing-library/react';
import React from 'react';
import { renderWithTheme } from '../../test/utils';
import { ColorInput } from './ColorInput';

function rgb2hex(str: string) {
  const rgb = str.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  function hex(x: string) {
    return `0${parseInt(x, 10).toString(16)}`.slice(-2);
  }
  return rgb ? `#${hex(rgb[1])}${hex(rgb[2])}${hex(rgb[3])}` : '';
}

describe('<ColorInput />', () => {
  it('should call handlers', () => {
    const color = '#f0f0dd';
    const onChange = jest.fn();
    const { container } = renderWithTheme(<ColorInput onChange={onChange} />);
    const input = container.querySelector(`[type="color"]`) as HTMLInputElement;
    fireEvent.change(input, { target: { value: color } });
    expect(onChange).toBeCalledTimes(1);
  });

  it('should properly pass value to input element', () => {
    const color = '#f0f0dd';
    const { container } = renderWithTheme(<ColorInput value={color} />);
    const input = container.querySelector(`[type="color"]`) as HTMLInputElement;

    expect(input.value).toBe(color);
  });
  it('should display current color', () => {
    const color = '#f0f0dd';
    const { getByRole } = renderWithTheme(<ColorInput value={color} />);
    const colorPreview = getByRole('presentation');
    const displayedColor = window.getComputedStyle(
      colorPreview,
      null
    ).background;

    const displayedColorHex = rgb2hex(displayedColor);
    expect(displayedColorHex).toBe(color);
  });

  describe('prop: disabled', () => {
    it('should render disabled input', () => {
      const { container } = renderWithTheme(<ColorInput disabled />);
      const input = container.querySelector(`[type="color"]`);

      expect(input).toHaveAttribute('disabled');
    });

    it('should be overridden by props', () => {
      const { container, rerender } = renderWithTheme(<ColorInput disabled />);
      rerender(<ColorInput disabled={false} />);
      const input = container.querySelector(`[type="color"]`);

      expect(input).not.toHaveAttribute('disabled');
    });
  });
});
