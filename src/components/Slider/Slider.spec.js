// Pretty much straight out copied from https://github.com/mui-org/material-ui 😂

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

    const { container, getByRole } = renderWithTheme(
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

    getByRole('slider').focus();
    fireEvent.keyDown(document.activeElement, {
      key: 'Home'
    });
    expect(handleChange).toHaveBeenCalledTimes(2);
    expect(handleChangeCommitted).toHaveBeenCalledTimes(2);
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
  it('should forward mouseDown', () => {
    const handleMouseDown = jest.fn();
    const { container } = renderWithTheme(
      <Slider onMouseDown={handleMouseDown} value={0} />
    );
    fireEvent.mouseDown(container.firstChild);
    expect(handleMouseDown).toHaveBeenCalledTimes(1);
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

      thumb.focus();
      fireEvent.keyDown(document.activeElement, {
        key: 'ArrowUp'
      });
      expect(thumb).toHaveAttribute('aria-valuenow', '30');

      fireEvent.keyDown(document.activeElement, {
        key: 'ArrowDown'
      });
      expect(thumb).toHaveAttribute('aria-valuenow', '20');
    });
  });

  describe('prop: disabled', () => {
    it('should render disabled slider', () => {
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

  describe('keyboard', () => {
    it('should handle all the keys', () => {
      const { getByRole } = renderWithTheme(<Slider defaultValue={50} />);
      const thumb = getByRole('slider');
      thumb.focus();

      fireEvent.keyDown(document.activeElement, {
        key: 'Home'
      });
      expect(thumb).toHaveAttribute('aria-valuenow', '0');

      fireEvent.keyDown(document.activeElement, {
        key: 'End'
      });
      expect(thumb).toHaveAttribute('aria-valuenow', '100');

      fireEvent.keyDown(document.activeElement, {
        key: 'PageDown'
      });
      expect(thumb).toHaveAttribute('aria-valuenow', '90');

      fireEvent.keyDown(document.activeElement, {
        key: 'Escape'
      });
      expect(thumb).toHaveAttribute('aria-valuenow', '90');

      fireEvent.keyDown(document.activeElement, {
        key: 'PageUp'
      });
      expect(thumb).toHaveAttribute('aria-valuenow', '100');
    });

    const moveLeftEvent = {
      key: 'ArrowLeft'
    };
    const moveRightEvent = {
      key: 'ArrowRight'
    };

    it('should use min as the step origin', () => {
      const { getByRole } = renderWithTheme(
        <Slider defaultValue={4} step={2} max={12} min={2} />
      );
      const thumb = getByRole('slider');
      thumb.focus();

      fireEvent.keyDown(document.activeElement, moveRightEvent);
      expect(thumb).toHaveAttribute('aria-valuenow', '6');

      fireEvent.keyDown(document.activeElement, moveLeftEvent);
      expect(thumb).toHaveAttribute('aria-valuenow', '4');

      expect(thumb.style.left).toBe('20%');
    });

    it('should reach right edge value', () => {
      const { getByRole } = renderWithTheme(
        <Slider defaultValue={90} min={6} max={108} step={10} />
      );
      const thumb = getByRole('slider');
      thumb.focus();

      fireEvent.keyDown(document.activeElement, moveRightEvent);
      expect(thumb).toHaveAttribute('aria-valuenow', '96');

      fireEvent.keyDown(document.activeElement, moveRightEvent);
      expect(thumb).toHaveAttribute('aria-valuenow', '106');

      fireEvent.keyDown(document.activeElement, moveRightEvent);
      expect(thumb).toHaveAttribute('aria-valuenow', '108');

      fireEvent.keyDown(document.activeElement, moveLeftEvent);
      expect(thumb).toHaveAttribute('aria-valuenow', '96');

      fireEvent.keyDown(document.activeElement, moveLeftEvent);
      expect(thumb).toHaveAttribute('aria-valuenow', '86');
    });

    it('should reach left edge value', () => {
      const { getByRole } = renderWithTheme(
        <Slider defaultValue={20} min={6} max={108} step={10} />
      );
      const thumb = getByRole('slider');
      thumb.focus();

      fireEvent.keyDown(document.activeElement, moveLeftEvent);
      expect(thumb).toHaveAttribute('aria-valuenow', '6');

      fireEvent.keyDown(document.activeElement, moveRightEvent);
      expect(thumb).toHaveAttribute('aria-valuenow', '16');

      fireEvent.keyDown(document.activeElement, moveRightEvent);
      expect(thumb).toHaveAttribute('aria-valuenow', '26');
    });

    it('should round value to step precision', () => {
      const { getByRole } = renderWithTheme(
        <Slider defaultValue={0.2} min={0} max={1} step={0.1} />
      );
      const thumb = getByRole('slider');
      thumb.focus();

      fireEvent.keyDown(document.activeElement, moveRightEvent);
      expect(thumb).toHaveAttribute('aria-valuenow', '0.3');
    });

    it('should not fail to round value to step precision when step is very small', () => {
      const { getByRole } = renderWithTheme(
        <Slider
          defaultValue={0.00000002}
          min={0}
          max={0.00000005}
          step={0.00000001}
        />
      );
      const thumb = getByRole('slider');
      thumb.focus();

      fireEvent.keyDown(document.activeElement, moveRightEvent);
      expect(thumb).toHaveAttribute('aria-valuenow', '3e-8');
    });

    it('should not fail to round value to step precision when step is very small and negative', () => {
      const { getByRole } = renderWithTheme(
        <Slider
          defaultValue={-0.00000002}
          min={-0.00000005}
          max={0}
          step={0.00000001}
        />
      );
      const thumb = getByRole('slider');
      thumb.focus();

      fireEvent.keyDown(document.activeElement, moveLeftEvent);
      expect(thumb).toHaveAttribute('aria-valuenow', '-3e-8');
    });
  });

  describe('prop: orientation', () => {
    it('when vertical, should render with aria-orientation attribute set to "vertical" ', () => {
      const { getByRole } = renderWithTheme(
        <Slider orientation='vertical' value={0} />
      );

      expect(getByRole('slider')).toHaveAttribute(
        'aria-orientation',
        'vertical'
      );
    });

    it('should report the right position', () => {
      const handleChange = jest.fn();
      const { container } = renderWithTheme(
        <Slider
          orientation='vertical'
          defaultValue={20}
          onChange={handleChange}
        />
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
