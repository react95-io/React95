import React, { useRef, useEffect } from 'react';
import propTypes from 'prop-types';
import { StyledOptionsList, StyledOptionsListItem } from './SelectBox.styles';
import { StyledCutout } from '../Cutout/Cutout';

const SelectBox = React.forwardRef(function SelectBox(props) {
  const { options, value, onSelect, width, height } = props;
  const selectedListItemRef = useRef(null);
  const listRef = useRef(null);

  const handleKeyDown = event => {
    switch (event.key) {
      case 'ArrowDown':
        if (value < options.length - 1) {
          event.preventDefault();
          onSelect(value + 1);
          listRef.current.childNodes[value + 1].scrollIntoView({
            block: 'end'
          });
        }
        break;
      case 'ArrowUp':
        if (value > 0) {
          event.preventDefault();
          onSelect(value - 1);
          listRef.current.childNodes[value - 1].scrollIntoView({
            block: 'nearest'
          });
        }
        break;
      case 'Home':
        onSelect(0);
        listRef.current.childNodes[0].scrollIntoView({
          block: 'start'
        });
        break;
      case 'End':
        onSelect(options.length - 1);
        listRef.current.childNodes[options.length - 1].scrollIntoView({
          block: 'end'
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    selectedListItemRef.current.scrollIntoView({
      block: 'start'
    });
  }, [selectedListItemRef]);

  const handleClickOnItem = itemValue => {
    onSelect(itemValue);
    listRef.current.childNodes[itemValue].scrollIntoView({
      block: 'nearest'
    });
  };

  return (
    <StyledCutout>
      <StyledOptionsList
        style={{ width, height }}
        ref={listRef}
        onKeyDown={handleKeyDown}
        tabIndex={-1}
      >
        {options.map(option => (
          <StyledOptionsListItem
            key={option.value.toString()}
            onClick={() => handleClickOnItem(option.value)}
            type='button'
            isSelected={option.value === value}
            ref={option.value === value ? selectedListItemRef : null}
          >
            {option.label}
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
