import React from 'react';
import propTypes from 'prop-types';

import styled, { css } from 'styled-components';

/* Some Default Styles for the Tags */
const defaultTextColor = '#2b0b00';
const defaultBackgroundColor = '#e9c899';
const defaultBorderRadius = '6px';

/* Flex Style */
const commonDisplayFlexStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

/* Common Styling for Tags */
const commonTagStyles = css`
  height: 28px;
  margin: 1px;
  border-radius: ${defaultBorderRadius};
  border: 1px solid #222222;
  cursor: pointer;
  ${commonDisplayFlexStyles}
`;

/* Common Styling for Tag Sections */
const commonTagSectionStyle = css`
    height: 100%;
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

/* Styled component for Tag */
const StyledTag = styled.span`
  ${commonTagStyles}
  font-size: inherit;
  background-color: ${props => props.backgroundColor || defaultBackgroundColor};
  color: ${props => props.color || defaultTextColor};

  &:hover {
    opacity: 0.9;
  }
`;

/* Styled Component for Each Tag Section */
const StyledTagSection = styled.span`
  ${commonTagSectionStyle}
  background-color: inherit;
  color: inherit;
  padding: ${props => (props.type === 'image' ? '1px 5px' : '2px 5px')};
`;

/* Styled Component for Tags Wrapper */
const StyledTagsWrapper = styled.div`
  ${commonDisplayFlexStyles}
  display: flex !important;
  flex-wrap: wrap;
  margin: 1rem;
`;

/**
 * @description Component to Show Image Section
 * @param {ReactNode | String} image : Image to be shown either a ReactComponent or a Link of image
 * @param {String} alt : alt text for the image
 * @returns {ReactNode}
 */
// eslint-disable-next-line
function ImageSection(NewImage, alt = '') {
  const dataType = typeof NewImage;
  const isString = dataType === 'string';

  console.log('image', NewImage, isString);

  if (isString)
    return (
      <img
        src={NewImage.startsWith('http') ? NewImage : '/' + NewImage}
        alt={alt}
      />
    );
  const component = NewImage();
  return component;
}

/**
 * @description Component to Show Text Section
 * @param {String} text : Text to be shown
 * @returns {ReactNode}
 */
// eslint-disable-next-line
function TextSection({ text }) {
  return <span>{text}</span>;
}

/**
 * @description Tag Component for Windows 1995 UI
 * @param {Array} contentArray Array of Contents to be shown in the Tag in the order to be shown
 * @example
 * [
 *    {
            type: "image",
            content: {ReactComponent | Link},
            alt: {String},
        },  
        {
            type: "text",
            text: {String},
        }
 * ]
 * @return {ReactNode} Tag Component
 */
const Tag = React.forwardRef((props, ref) => {
  const { contentArray, ...otherProps } = props;

  return (
    <StyledTag ref={ref} {...otherProps}>
      {contentArray.map(({ type, content, alt }, i) => (
        <StyledTagSection key={i} type={type}>
          {type === 'text' ? (
            <TextSection text={content} />
          ) : (
            ImageSection(content, alt)
          )}
        </StyledTagSection>
      ))}
    </StyledTag>
  );
});

Tag.defaultProps = {};

/* eslint-disable */
Tag.propTypes = {
  contentArray: propTypes.Array,
  backgroundColor: propTypes.String,
  color: propTypes.String
};
/* eslint-enable */

/**
 * @description Tags Wrapper Component for Tags
 * @return {ReactNode} Tag Wrapper Component
 */
export const TagsWrapper = React.forwardRef((props, ref) => {
  const { children, ...otherProps } = props;

  return (
    <StyledTagsWrapper {...otherProps} ref={ref}>
      {children}
    </StyledTagsWrapper>
  );
});

/* eslint-disable */
TagsWrapper.propTypes = {
  children: propTypes.node
};
/* eslint-enable */

export default Tag;
