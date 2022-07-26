import { fireEvent } from '@testing-library/react';

import { renderWithTheme } from '../../test/utils';
import { NumberField } from './NumberField';

// TODO: should we pass number or string to callbacks?
describe('<NumberField />', () => {
  it('should call onChange on spin buttons click', () => {
    const handleChange = jest.fn();

    const { getByTestId } = renderWithTheme(
      <NumberField onChange={handleChange} defaultValue={2} />
    );
    const spinButton = getByTestId('increment');
    spinButton.click();
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(3);
  });

  it('should call onChange on blur after keyboard input', () => {
    const handleChange = jest.fn();
    const { container } = renderWithTheme(
      <NumberField onChange={handleChange} defaultValue={0} />
    );
    const input = container.querySelector('input') as HTMLInputElement;
    input.focus();
    fireEvent.change(input, { target: { value: '777' } });

    expect(handleChange).toHaveBeenCalledTimes(0);
    input.blur();

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(777);
  });

  // TODO: this test passes even tho it fails in real-life
  it('should not call onChange on blur, when clicked element is one of the spin buttons', () => {
    const handleChange = jest.fn();

    const { getByTestId, container } = renderWithTheme(
      <NumberField onChange={handleChange} value={0} />
    );
    const input = container.querySelector('input') as HTMLInputElement;
    const incrementButton = getByTestId('increment');

    input.focus();
    fireEvent.keyDown(document.activeElement as HTMLInputElement, {
      key: '2'
    });
    incrementButton.click();
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should give correct result after user changes input value and then clicks increment button', () => {
    const handleChange = jest.fn();
    const { container, getByTestId } = renderWithTheme(
      <NumberField onChange={handleChange} defaultValue={0} />
    );
    const input = container.querySelector('input') as HTMLInputElement;
    const incrementButton = getByTestId('increment');

    fireEvent.change(input, { target: { value: '2' } });
    incrementButton.click();

    expect(handleChange).toHaveBeenCalledWith(3);
  });

  it('should reach max value', () => {
    const { getByTestId, container } = renderWithTheme(
      <NumberField defaultValue={90} min={0} max={100} step={10} />
    );
    const input = container.querySelector('input') as HTMLInputElement;
    const incrementButton = getByTestId('increment');
    incrementButton.click();

    expect(input.value).toBe('100');
  });

  it('should reach min value', () => {
    const { getByTestId, container } = renderWithTheme(
      <NumberField defaultValue={10} min={0} max={100} step={10} />
    );
    const input = container.querySelector('input') as HTMLInputElement;
    const decrementButton = getByTestId('decrement');
    decrementButton.click();

    expect(input.value).toBe('0');
  });

  describe('prop: step', () => {
    it('should be 1 by default', () => {
      const { getByTestId, container } = renderWithTheme(
        <NumberField defaultValue={0} />
      );
      const input = container.querySelector('input') as HTMLInputElement;
      const incrementButton = getByTestId('increment');
      incrementButton.click();

      expect(input.value).toBe('1');
    });

    it('should change value by specified step', () => {
      const { getByTestId, container } = renderWithTheme(
        <NumberField defaultValue={10} step={3} />
      );
      const input = container.querySelector('input') as HTMLInputElement;
      const decrementButton = getByTestId('decrement');
      decrementButton.click();

      expect(input.value).toBe('7');
    });

    it('should handle decimal step', () => {
      const { getByTestId, container } = renderWithTheme(
        <NumberField defaultValue={10} step={0.3} />
      );
      const input = container.querySelector('input') as HTMLInputElement;
      const decrementButton = getByTestId('decrement');
      decrementButton.click();

      expect(input.value).toBe('9.7');
    });
  });

  describe('prop: disabled', () => {
    it('should render disabled', () => {
      const { getByTestId, container } = renderWithTheme(
        <NumberField defaultValue={10} disabled />
      );
      const input = container.querySelector('input') as HTMLInputElement;
      const incrementButton = getByTestId('increment');
      const decrementButton = getByTestId('decrement');

      expect(input).toHaveAttribute('disabled');
      expect(incrementButton).toHaveAttribute('disabled');
      expect(decrementButton).toHaveAttribute('disabled');
    });

    it('should not react to button clicks', () => {
      const { getByTestId, container } = renderWithTheme(
        <NumberField defaultValue={10} disabled />
      );
      const input = container.querySelector('input') as HTMLInputElement;
      const incrementButton = getByTestId('increment');
      const decrementButton = getByTestId('decrement');

      incrementButton.click();
      expect(input.value).toBe('10');

      decrementButton.click();
      expect(input.value).toBe('10');
    });
  });

  describe('prop: width', () => {
    it('should render component of specified width', () => {
      const { container } = renderWithTheme(
        <NumberField defaultValue={10} disabled width={93} />
      );
      expect(
        getComputedStyle(container.firstElementChild as HTMLInputElement).width
      ).toBe('93px');
    });

    it('should handle %', () => {
      const { container } = renderWithTheme(
        <NumberField defaultValue={10} disabled width='93%' />
      );
      expect(
        getComputedStyle(container.firstElementChild as HTMLInputElement).width
      ).toBe('93%');
    });
  });
});
