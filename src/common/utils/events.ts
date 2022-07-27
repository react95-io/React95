import React from 'react';

export const focusEventTypes = ['blur', 'focus'];

export const keyboardEventTypes = ['keydown', 'keypress', 'keyup'];

export const mouseEventTypes = [
  'click',
  'contextmenu',
  'doubleclick',
  'drag',
  'dragend',
  'dragenter',
  'dragexit',
  'dragleave',
  'dragover',
  'dragstart',
  'drop',
  'mousedown',
  'mouseenter',
  'mouseleave',
  'mousemove',
  'mouseout',
  'mouseover',
  'mouseup'
];

export function isReactFocusEvent<T>(
  event: React.SyntheticEvent<T> | Event
): event is React.FocusEvent<T> {
  return 'nativeEvent' in event && focusEventTypes.includes(event.type);
}

export function isReactKeyboardEvent<T>(
  event: React.SyntheticEvent<T> | Event
): event is React.KeyboardEvent<T> {
  return 'nativeEvent' in event && keyboardEventTypes.includes(event.type);
}

export function isReactMouseEvent<T>(
  event: React.SyntheticEvent<T> | Event
): event is React.MouseEvent<T> {
  return 'nativeEvent' in event && mouseEventTypes.includes(event.type);
}
