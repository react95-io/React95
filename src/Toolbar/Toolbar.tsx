import React, { forwardRef, useRef, useEffect } from 'react';
import styled from 'styled-components';
import useForkRef from '../common/hooks/useForkRef';

type ToolbarProps = {
  children?: React.ReactNode;
  noPadding?: boolean;
  onOutsideClick?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

const StyledToolbar = styled.div<ToolbarProps>`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${props => (props.noPadding ? '0' : '4px')};
`;

const Toolbar = forwardRef<HTMLDivElement, ToolbarProps>(function Toolbar(
  { children, noPadding = false, onOutsideClick, ...otherProps },
  ref
) {
  const toolbarRef = useRef<HTMLDivElement | null>(null);
  const handleRef = useForkRef(ref, toolbarRef);

  useEffect(() => {
    if (!onOutsideClick) {
      return () => {};
    }

    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as Node;

      if (!toolbarRef.current?.contains(target)) {
        onOutsideClick();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [ref, onOutsideClick]);

  return (
    <StyledToolbar noPadding={noPadding} ref={handleRef} {...otherProps}>
      {children}
    </StyledToolbar>
  );
});

Toolbar.displayName = 'Toolbar';

export { Toolbar };
