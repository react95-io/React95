// Pretty much straight out copied from https://github.com/mui-org/material-ui 😂

import React from 'react';
import { fireEvent } from '@testing-library/react';

import { renderWithTheme } from '../../test/utils';
import TextField from './TextField';

describe('<TextField />', () => {
  it('should render an <input /> inside the div', () => {
    const { container } = renderWithTheme(<TextField />);
    const input = container.querySelector('input');
    expect(input).toHaveAttribute('type', 'text');
    expect(input).not.toHaveAttribute('required');
  });

  it('should fire event callbacks', () => {
    const handleChange = jest.fn();
    const handleFocus = jest.fn();
    const handleBlur = jest.fn();
    const handleKeyUp = jest.fn();
    const handleKeyDown = jest.fn();
    const { getByRole } = renderWithTheme(
      <TextField
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
      />
    );
    const input = getByRole('textbox');

    // simulating user input: gain focus, key input (keydown, (input), change, keyup), blur

    input.focus();
    expect(handleFocus).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(document.activeElement, { key: 'a' });
    expect(handleKeyDown).toHaveBeenCalledTimes(1);

    fireEvent.change(input, { target: { value: 'a' } });
    expect(handleChange).toHaveBeenCalledTimes(1);

    fireEvent.keyUp(document.activeElement, { key: 'a' });
    expect(handleKeyUp).toHaveBeenCalledTimes(1);

    input.blur();
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it('should considered [] as controlled', () => {
    const { getByRole } = renderWithTheme(<TextField value={[]} />);
    const input = getByRole('textbox');

    expect(input).toHaveProperty('value', '');
    fireEvent.change(input, { target: { value: 'do not work' } });
    expect(input).toHaveProperty('value', '');
  });

  it('should forwardRef to native input', () => {
    const inputRef = React.createRef();
    const { getByRole } = renderWithTheme(<TextField ref={inputRef} />);
    const input = getByRole('textbox');
    expect(inputRef.current).toBe(input);
  });

  describe('multiline', () => {
    it('should render textarea when passed the multiline prop', () => {
      const { container } = renderWithTheme(<TextField multiline />);
      const textarea = container.querySelector('textarea');
      expect(textarea).not.toBe(null);
    });

    it('should forward rows prop', () => {
      const { container } = renderWithTheme(<TextField multiline rows={3} />);
      const textarea = container.querySelector('textarea');
      expect(textarea).toHaveAttribute('rows', '3');
    });
  });

  describe('prop: disabled', () => {
    it('should render a disabled <input />', () => {
      const { container } = renderWithTheme(<TextField disabled />);
      const input = container.querySelector('input');
      expect(input).toHaveAttribute('disabled');
    });
    it('should be overridden by props', () => {
      const { getByRole, rerender } = renderWithTheme(<TextField disabled />);
      rerender(<TextField disabled={false} />);
      const input = getByRole('textbox');
      expect(input).not.toHaveAttribute('disabled');
    });
  });

  describe('prop: variant', () => {
    it('should be "default" by default', () => {
      const { getByTestId } = renderWithTheme(<TextField />);
      expect(getByTestId('variant-default')).toBeInTheDocument();
    });
    it('should handle "flat" variant', () => {
      const { getByTestId } = renderWithTheme(<TextField variant='flat' />);
      expect(getByTestId('variant-flat')).toBeInTheDocument();
    });
  });

  describe('prop: fullWidth', () => {
    it('should make component take 100% width', () => {
      const { container } = renderWithTheme(<TextField fullWidth />);
      expect(window.getComputedStyle(container.firstChild).width).toBe('100%');
    });
  });
});
