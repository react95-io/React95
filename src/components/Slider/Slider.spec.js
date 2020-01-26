import React from 'react';
import { fireEvent } from '@testing-library/react';

import { renderWithTheme, Touch } from '../../../test/utils';
import Slider from './Slider';

function createTouches(touches) {
  return {
    changedTouches: touches.map(
      touch =>
        new Touch({
          target: document.body,
          ...touch
        })
    )
  };
}

describe('<Slider />', () => {
  it('should call handlers', () => {
    const handleChange = jest.fn();
    const handleChangeCommitted = jest.fn();

    const { container } = renderWithTheme(
      <Slider
        onChange={handleChange}
        onChangeCommitted={handleChangeCommitted}
        value={0}
      />
    );

    fireEvent.mouseDown(container.firstChild);
    fireEvent.mouseUp(document.body);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChangeCommitted).toHaveBeenCalledTimes(1);
  });

  it('should only listen to changes from the same touchpoint', () => {
    const handleChange = jest.fn();
    const handleChangeCommitted = jest.fn();
    const { container } = renderWithTheme(
      <Slider
        onChange={handleChange}
        onChangeCommitted={handleChangeCommitted}
        value={0}
      />
    );

    fireEvent.touchStart(
      container.firstChild,
      createTouches([{ identifier: 1 }])
    );
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChangeCommitted).not.toHaveBeenCalled();

    fireEvent.touchEnd(document.body, createTouches([{ identifier: 2 }]));
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChangeCommitted).not.toHaveBeenCalled();

    fireEvent.touchMove(document.body, createTouches([{ identifier: 1 }]));
    expect(handleChange).toHaveBeenCalledTimes(2);
    expect(handleChangeCommitted).toHaveBeenCalledTimes(0);

    fireEvent.touchMove(document.body, createTouches([{ identifier: 2 }]));
    expect(handleChange).toHaveBeenCalledTimes(2);
    expect(handleChangeCommitted).toHaveBeenCalledTimes(0);

    fireEvent.touchEnd(document.body, createTouches([{ identifier: 1 }]));
    expect(handleChange).toHaveBeenCalledTimes(2);
    expect(handleChangeCommitted).toHaveBeenCalledTimes(1);
  });

  it('defaults to horizontal orientation', () => {
    const { getByRole } = renderWithTheme(<Slider value={0} />);

    expect(getByRole('slider')).toHaveAttribute(
      'aria-orientation',
      'horizontal'
    );
  });

  describe('prop: step', () => {
    it('should handle a null step', () => {
      const { getByRole, container } = renderWithTheme(
        <Slider
          step={null}
          marks={[{ value: 0 }, { value: 20 }, { value: 30 }]}
          defaultValue={0}
        />
      );
      // mocking containers size
      container.firstChild.getBoundingClientRect = () => ({
        width: 100,
        height: 20,
        bottom: 20,
        left: 0
      });
      const thumb = getByRole('slider');

      fireEvent.touchStart(
        container.firstChild,
        createTouches([{ identifier: 1, clientX: 22, clientY: 0 }])
      );
      expect(thumb).toHaveAttribute('aria-valuenow', '20');
    });
  });

  describe('prop: disabled', () => {
    it("shouldn't render disabled slider", () => {
      const { getByRole, container } = renderWithTheme(
        <Slider
          step={null}
          marks={[{ value: 0 }, { value: 20 }, { value: 30 }]}
          defaultValue={0}
          disabled
        />
      );
      const thumb = getByRole('slider');
      expect(
        window
          .getComputedStyle(container.firstChild, null)
          .getPropertyValue('pointer-events')
      ).toBe('none');
      expect(thumb).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('prop: vertical', () => {
    it('should render with aria-orientation attribute set to "vertical" ', () => {
      const { getByRole } = renderWithTheme(<Slider vertical value={0} />);

      expect(getByRole('slider')).toHaveAttribute(
        'aria-orientation',
        'vertical'
      );
    });

    it('should report the right position', () => {
      const handleChange = jest.fn();
      const { container } = renderWithTheme(
        <Slider vertical defaultValue={20} onChange={handleChange} />
      );

      // mocking containers size
      container.firstChild.getBoundingClientRect = () => ({
        width: 20,
        height: 100,
        bottom: 100,
        left: 0
      });

      fireEvent.touchStart(
        container.firstChild,
        createTouches([{ identifier: 1, clientX: 0, clientY: 20 }])
      );
      fireEvent.touchMove(
        document.body,
        createTouches([{ identifier: 1, clientX: 0, clientY: 22 }])
      );

      expect(handleChange).toHaveBeenCalledTimes(2);
      expect(handleChange.mock.calls[0][0]).toBe(80);
      expect(handleChange.mock.calls[1][0]).toBe(78);
    });
  });

  describe('prop: marks', () => {
    it('displays only ticks when marks is set to "true"', () => {
      const { queryAllByTestId } = renderWithTheme(
        <Slider marks defaultValue={0} min={0} max={6} />
      );
      const ticks = queryAllByTestId('tick');
      const marks = queryAllByTestId('mark');

      expect(ticks.length).toBe(7);
      expect(marks.length).toBe(0);
    });

    it('displays marks passed as prop', () => {
      const { queryAllByTestId } = renderWithTheme(
        <Slider
          defaultValue={0}
          marks={[
            { value: 0, label: 'zero' },
            { value: 20, label: 'twenty' },
            { value: 30, label: 'thirty' }
          ]}
        />
      );
      const marks = queryAllByTestId('mark');

      expect(marks[0].textContent).toBe('zero');
      expect(marks[1].textContent).toBe('twenty');
      expect(marks[2].textContent).toBe('thirty');
    });
  });
});
