import React, { useRef, useEffect } from 'react';
import propTypes from 'prop-types';
import {
  StyledOptionsList,
  StyledOptionsListItemInnerButton,
  StyledOptionsListItem
} from './SelectBox.styles';
import { StyledCutout } from '../Cutout/Cutout';

const SelectBox = React.forwardRef(function SelectBox(props) {
  const { options, value, onSelect, width, height } = props;
  const selectedListItemRef = useRef(null);
  const listRef = useRef(null);

  const handleKeyDown = event => {
    const { key } = event;
    switch (key) {
      case 'ArrowDown':
        if (value < options.length - 1) onSelect(value + 1);
        break;
      case 'ArrowUp':
        if (value > 0) onSelect(value - 1);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    selectedListItemRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }, [selectedListItemRef]);

  return (
    <StyledCutout>
      <StyledOptionsList
        style={{ width, height }}
        ref={listRef}
        onKeyDown={handleKeyDown}
      >
        {options.map(o => (
          <StyledOptionsListItem key={o.value.toString()}>
            <StyledOptionsListItemInnerButton
              onClick={() => onSelect(o.value)}
              type='button'
              autoFocus={o.value === value}
              isSelected={o.value === value}
              ref={o.value === value ? selectedListItemRef : null}
            >
              {o.label}
            </StyledOptionsListItemInnerButton>
          </StyledOptionsListItem>
        ))}
      </StyledOptionsList>
    </StyledCutout>
  );
});

SelectBox.defaultProps = {
  onSelect: () => {},
  options: [],
  value: 0,
  width: '300px',
  height: '150px'
};

SelectBox.propTypes = {
  onSelect: propTypes.func,
  options: propTypes.arrayOf(
    propTypes.objectOf({ value: propTypes.number, label: propTypes.string })
  ),
  value: propTypes.number,
  width: propTypes.string,
  height: propTypes.string
};

export default SelectBox;
