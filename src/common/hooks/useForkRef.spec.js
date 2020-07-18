/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import propTypes from 'prop-types';

import useForkRef from './useForkRef';

const consoleError = console.error;

beforeEach(() => {
  console.error = jest.fn();
});

afterEach(() => {
  console.error = consoleError;
});

describe('useForkRef', () => {
  it('returns a single ref-setter function that forks the ref to its inputs', () => {
    function Component(props) {
      const { innerRef } = props;
      const ownRef = React.useRef(null);
      const [, forceUpdate] = React.useState(0);
      React.useEffect(() => forceUpdate(n => !n), []);

      const handleRef = useForkRef(innerRef, ownRef);

      return (
        <div ref={handleRef}>{ownRef.current ? 'has a ref' : 'has no ref'}</div>
      );
    }

    Component.propTypes = {
      innerRef: propTypes.any
    };

    const outerRef = React.createRef();
    render(<Component innerRef={outerRef} />);

    expect(outerRef.current.textContent).toBe('has a ref');
    expect(console.error).not.toHaveBeenCalled();
  });

  it('forks if only one of the branches requires a ref', () => {
    const Component = React.forwardRef(function Component(props, ref) {
      const [hasRef, setHasRef] = React.useState(false);
      const handleOwnRef = React.useCallback(() => setHasRef(true), []);
      const handleRef = useForkRef(handleOwnRef, ref);

      return <div ref={handleRef}>{String(hasRef)}</div>;
    });

    const { getByText } = render(<Component />);

    expect(getByText('true')).toBeInTheDocument();
    expect(console.error).not.toHaveBeenCalled();
  });

  it('does nothing if none of the forked branches requires a ref', () => {
    const Outer = React.forwardRef(function Outer(props, ref) {
      const { children } = props;
      const handleRef = useForkRef(children.ref, ref);

      return React.cloneElement(children, { ref: handleRef });
    });

    Outer.propTypes = { children: propTypes.element.isRequired };

    function Inner() {
      return <div />;
    }

    render(
      <Outer>
        <Inner />
      </Outer>
    );
    expect(console.error).not.toHaveBeenCalled();
  });

  describe('changing refs', () => {
    function Div(props) {
      const { leftRef, rightRef, ...other } = props;
      const handleRef = useForkRef(leftRef, rightRef);

      return <div {...other} ref={handleRef} />;
    }

    Div.propTypes = {
      leftRef: propTypes.oneOfType([propTypes.func, propTypes.object]),
      rightRef: propTypes.oneOfType([propTypes.func, propTypes.object])
    };

    it('handles changing from no ref to some ref', () => {
      const { rerender } = render(<Div id='test' />);

      expect(console.error).not.toHaveBeenCalled();

      const ref = React.createRef();
      rerender(<Div id='test' leftRef={ref} />);

      expect(ref.current.id).toBe('test');
      expect(console.error).not.toHaveBeenCalled();
    });

    it('cleans up detached refs', () => {
      const firstLeftRef = React.createRef();
      const firstRightRef = React.createRef();
      const secondRightRef = React.createRef();

      const { rerender } = render(
        <Div leftRef={firstLeftRef} rightRef={firstRightRef} id='test' />
      );

      expect(console.error).not.toHaveBeenCalled();

      expect(firstLeftRef.current.id).toBe('test');
      expect(firstRightRef.current.id).toBe('test');
      expect(secondRightRef.current).toBe(null);

      rerender(
        <Div leftRef={firstLeftRef} rightRef={secondRightRef} id='test' />
      );

      expect(firstLeftRef.current.id).toBe('test');
      expect(firstRightRef.current).toBe(null);
      expect(secondRightRef.current.id).toBe('test');
    });
  });
});
