import React from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { StyledLabel, LabelText } from '../SwitchBase/SwitchBase';
import useControlledOrUncontrolled from '../common/hooks/useControlledOrUncontrolled';

const Text = styled(LabelText)`
  white-space: nowrap;
`;

const focusedElementStyles = css`
  :focus {
    outline: none;
  }

  &:not([disabled]) {
    cursor: pointer;

    :focus {
      ${Text} {
        background: ${({ theme }) => theme.hoverBackground};
        color: ${({ theme }) => theme.materialTextInvert};
        outline: 2px dotted ${({ theme }) => theme.focusSecondary};
      }
    }
  }
`;

const TreeView = styled.ul`
  position: relative;
  isolation: isolate;

  ${({ isRootLevel }) =>
    isRootLevel &&
    css`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({ theme }) => theme.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({ theme }) => theme.borderDark};
      font-size: 12px;
    }
  }
`;

const TreeItem = styled.li`
  position: relative;
  padding-left: ${({ hasItems }) => (!hasItems ? '13px' : '0')};

  ${({ isRootLevel }) =>
    !isRootLevel
      ? css`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({ theme }) => theme.material};
            }
          }
        `
      : css`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({ theme }) => theme.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({ theme }) => theme.borderDark};
    }
  }
`;

const Details = styled.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`;

const Summary = styled.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.materialText};
  user-select: none;
  padding-left: 18px;
  ${focusedElementStyles};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`;

const TitleWithIcon = styled(StyledLabel)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${focusedElementStyles};
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;

function toggleItem(state, id) {
  return state.includes(id)
    ? state.filter(item => item !== id)
    : [...state, id];
}

const Tree = React.forwardRef(function Tree(
  {
    disabled,
    className,
    style,
    tree,
    defaultSelected,
    defaultExpanded,
    selected,
    expanded,
    onNodeSelect,
    onNodeToggle
  },
  ref
) {
  const [expandedInternal, setExpandedInternal] = useControlledOrUncontrolled({
    value: expanded,
    defaultValue: defaultExpanded
  });

  const [selectedInternal, setSelectedInternal] = useControlledOrUncontrolled({
    value: selected,
    defaultValue: defaultSelected
  });

  function toggleMenu(event, id) {
    if (onNodeToggle) {
      const newState = toggleItem(expandedInternal, id);
      onNodeToggle(event, newState);
    }

    setExpandedInternal(previouslyExpandedIds =>
      toggleItem(previouslyExpandedIds, id)
    );
  }

  function select(event, id) {
    setSelectedInternal(id);

    if (onNodeSelect) {
      onNodeSelect(event, id);
    }
  }

  function handleLeafClick(event, id) {
    event.preventDefault();
    select(event, id);
  }

  function handleSummaryClick(event, id) {
    event.preventDefault();
    select(event, id);
    toggleMenu(event, id);
  }

  function renderTree(items, level = 0) {
    const isRootLevel = level === 0;

    return (
      <TreeView
        className={isRootLevel ? className : undefined}
        style={isRootLevel ? style : undefined}
        ref={isRootLevel ? ref : undefined}
        role={isRootLevel ? 'tree' : 'group'}
        isRootLevel={isRootLevel}
      >
        {items.map(item => {
          const hasItems = item.items && item.items.length > 0;
          const isMenuShown = expandedInternal.includes(item.id);
          const isNodeDisabled = disabled || item.disabled;
          const onClickSummary = !isNodeDisabled
            ? event => handleSummaryClick(event, item.id)
            : undefined;
          const onClickLeaf = !isNodeDisabled
            ? event => handleLeafClick(event, item.id)
            : undefined;
          const isSelected = selectedInternal === item.id;
          const icon = <Icon aria-hidden>{item.icon}</Icon>;

          return (
            <TreeItem
              key={item.label}
              isRootLevel={isRootLevel}
              role='treeitem'
              aria-expanded={isMenuShown}
              aria-selected={isSelected}
              hasItems={hasItems}
            >
              {!hasItems ? (
                <TitleWithIcon
                  as='button'
                  isDisabled={isNodeDisabled}
                  onClick={onClickLeaf}
                >
                  {icon}
                  <Text>{item.label}</Text>
                </TitleWithIcon>
              ) : (
                <Details open={isMenuShown}>
                  <Summary onClick={onClickSummary} disabled={isNodeDisabled}>
                    <TitleWithIcon isDisabled={isNodeDisabled}>
                      {icon}
                      <Text>{item.label}</Text>
                    </TitleWithIcon>
                  </Summary>

                  {isMenuShown && renderTree(item.items, level + 1)}
                </Details>
              )}
            </TreeItem>
          );
        })}
      </TreeView>
    );
  }

  return renderTree(tree);
});

Tree.defaultProps = {
  disabled: false,
  style: {},
  className: '',
  tree: [],
  defaultSelected: undefined,
  defaultExpanded: [],
  selected: undefined,
  expanded: undefined,
  onNodeToggle: undefined,
  onNodeSelect: undefined
};

const idType = propTypes.oneOfType([propTypes.string, propTypes.number]);

const treeDataShape = {
  id: idType.isRequired,
  label: propTypes.string.isRequired,
  icon: propTypes.object.isRequired,
  disabled: propTypes.bool
};

treeDataShape.items = propTypes.arrayOf(propTypes.shape(treeDataShape));

Tree.propTypes = {
  style: propTypes.object,
  className: propTypes.string,
  tree: propTypes.arrayOf(propTypes.shape(treeDataShape)),
  defaultSelected: idType,
  defaultExpanded: propTypes.arrayOf(idType),
  selected: idType,
  expanded: propTypes.arrayOf(idType),
  onNodeSelect: propTypes.func,
  onNodeToggle: propTypes.func,
  disabled: propTypes.bool
};

export default Tree;
