import React from 'react';
import propTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { blockSizes } from '../common/system';

/* Some Default Styles for the Chips */
// const defaultTextColor = '#2b0b00';
// const defaultBackgroundColor = '#e9c899';
const defaultBorderRadius = '10px';

/* Flex Style */
const commonDisplayFlexStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

/* Common Styling for Chips */
const commonChipStyles = css`
  display: inline-block;
  margin: 3px;
  border-radius: ${defaultBorderRadius};
  cursor: pointer;
  position: relative;
  padding: 0 10px;
  font-size: 1rem;

  &:hover,
  &:focus,
  &:active {
    box-shadow: 2px 2px 2px gray;
  }

  &::before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 1px 1px 0px 1px #dfdfdf, inset -1px -1px 0 1px #848584;
  }
  ${commonDisplayFlexStyles}
`;

/* Common Styling for Chip Sections */
const commonChipSectionStyle = css`
    ${commonDisplayFlexStyles}
    border-right: ${props =>
      props.type === 'image' ? 'none' : '1px solid #222222'};

    &:first-child {
        border-top-left-radius: ${defaultBorderRadius};
        border-bottom-left-radius: ${defaultBorderRadius};
    }

    &:last-child {
        border-top-right-radius: ${defaultBorderRadius};
        border-bottom-right-radius: ${defaultBorderRadius};
        border-right: none;
    }

    img,
    svg {
        height: 100%;
        width: auto;
    }
`;

/* Styled component for Chip */
const StyledChip = styled.div`
  color: ${({ theme, color }) => color ?? theme.canvasText};
  box-sizing: border-box;
  background: ${({ theme, backgroundColor }) =>
    backgroundColor ?? theme.canvas};
  ${commonChipStyles}
  height: ${({ size }) => blockSizes[size ?? 'sm']};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  &::before{
          border: 2px solid ${({ theme }) => theme.canvasText};
            height: ${({ size }) => blockSizes[size ?? 'sm']};
      }
`;

/* Styled Component for Each Chip Section */
const StyledChipSection = styled.span`
  ${commonChipSectionStyle}
  background-color: inherit;
  color: inherit;
  padding: 2px 5px;
`;

/**
 * @description Component to Show Text Section
 * @param {String} text : Text to be shown
 * @returns {ReactNode}
 */
function LabelSection({ label }) {
  return <span>{label}</span>;
}

LabelSection.propTypes = {
  label: propTypes.string.isRequired
};

const Chip = React.forwardRef((props, ref) => {
  const { label, image, onClick, ...otherProps } = props;

  return (
    <StyledChip
      ref={ref}
      {...otherProps}
      onClick={() => {
        if (onClick) onClick();
      }}
      role={onClick ? 'button' : ''}
      tabIndex={onClick ? 0 : null}
    >
      <StyledChipSection>
        <LabelSection label={label} />
      </StyledChipSection>
    </StyledChip>
  );
});

Chip.defaultProps = {
  image: null,
  onClick: null,
  size: 'sm',
  fullWidth: false,
  backgroundColor: null,
  color: null
};

Chip.propTypes = {
  label: propTypes.string.isRequired,
  image: propTypes.oneOf([propTypes.node, propTypes.string]),
  onClick: propTypes.func,
  size: propTypes.oneOf(['sm', 'md', 'lg']),
  fullWidth: propTypes.bool,
  backgroundColor: propTypes.string,
  color: propTypes.color
};

export default Chip;
