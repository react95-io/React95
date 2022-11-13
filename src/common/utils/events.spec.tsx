import { EventType, fireEvent, render, screen } from '@testing-library/react';
import React, { forwardRef } from 'react';
import {
  isReactFocusEvent,
  isReactKeyboardEvent,
  isReactMouseEvent
} from './events';

type FireEventMap = Record<string, EventType>;

const focusEventTypesMap: FireEventMap = { blur: 'blur', focus: 'focus' };

const keyboardEventTypesMap: FireEventMap = {
  keydown: 'keyDown',
  keypress: 'keyPress',
  keyup: 'keyUp'
};

const mouseEventTypesMap: FireEventMap = {
  click: 'click',
  contextmenu: 'contextMenu',
  doubleclick: 'doubleClick',
  drag: 'drag',
  dragend: 'dragEnd',
  dragenter: 'dragEnter',
  dragexit: 'dragExit',
  dragleave: 'dragLeave',
  dragover: 'dragOver',
  dragstart: 'dragStart',
  drop: 'drop',
  mousedown: 'mouseDown',
  mouseenter: 'mouseEnter',
  mouseleave: 'mouseLeave',
  mousemove: 'mouseMove',
  mouseout: 'mouseOut',
  mouseover: 'mouseOver',
  mouseup: 'mouseUp'
};

const OnEverything = forwardRef<
  HTMLInputElement,
  {
    callback: (event: React.SyntheticEvent<HTMLInputElement>) => void;
  }
>(({ callback }, ref) => {
  return (
    <input
      onBlur={callback}
      onClick={callback}
      onContextMenu={callback}
      onDoubleClick={callback}
      onDrag={callback}
      onDragEnd={callback}
      onDragEnter={callback}
      onDragExit={callback}
      onDragLeave={callback}
      onDragOver={callback}
      onDragStart={callback}
      onDrop={callback}
      onFocus={callback}
      onKeyDown={callback}
      onKeyPress={callback}
      onKeyUp={callback}
      onMouseDown={callback}
      onMouseEnter={callback}
      onMouseLeave={callback}
      onMouseMove={callback}
      onMouseOut={callback}
      onMouseOver={callback}
      onMouseUp={callback}
      ref={ref}
    />
  );
});

const renderEventTester = async () => {
  const callback = jest.fn<void, [React.SyntheticEvent<HTMLInputElement>]>();
  render(<OnEverything callback={callback} />);
  const input = await screen.findByRole('textbox');

  return {
    callback,
    emit: (fireEventFunctionName: keyof typeof fireEvent, init?: EventInit) => {
      fireEvent[fireEventFunctionName](input, init);
      const callbackCall =
        callback.mock.calls[callback.mock.calls.length - 1]?.[0];
      return callbackCall;
    }
  };
};

describe(isReactFocusEvent, () => {
  let emit: (
    fireEventFunctionName: keyof typeof fireEvent,
    init?: EventInit
  ) => React.SyntheticEvent<HTMLInputElement, Event>;
  beforeAll(async () => {
    ({ emit } = await renderEventTester());
  });

  it.each(Object.keys(focusEventTypesMap))(
    'returns correct results for %s',
    focusEventType => {
      expect(isReactFocusEvent(new Event(focusEventType))).toBeFalsy();
      const event = emit(focusEventTypesMap[focusEventType]);
      expect(isReactFocusEvent(event)).toBeTruthy();
    }
  );
});

describe(isReactKeyboardEvent, () => {
  let emit: (
    fireEventFunctionName: keyof typeof fireEvent,
    init?: EventInit
  ) => React.SyntheticEvent<HTMLInputElement, Event>;
  beforeAll(async () => {
    ({ emit } = await renderEventTester());
  });

  it.each(Object.keys(keyboardEventTypesMap))(
    'returns correct results for %s',
    focusEventType => {
      expect(isReactKeyboardEvent(new Event(focusEventType))).toBeFalsy();
      const event = emit(keyboardEventTypesMap[focusEventType]);
      expect(isReactKeyboardEvent(event)).toBeTruthy();
    }
  );
});

describe(isReactMouseEvent, () => {
  let emit: (
    fireEventFunctionName: keyof typeof fireEvent,
    init?: EventInit
  ) => React.SyntheticEvent<HTMLInputElement, Event>;
  beforeAll(async () => {
    ({ emit } = await renderEventTester());
  });

  it.each(Object.keys(mouseEventTypesMap))(
    'returns correct results for %s',
    focusEventType => {
      expect(isReactMouseEvent(new Event(focusEventType))).toBeFalsy();
      const event = emit(mouseEventTypesMap[focusEventType]);
      expect(isReactMouseEvent(event)).toBeTruthy();
    }
  );
});
