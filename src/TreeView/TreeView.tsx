import React, { forwardRef, useCallback } from 'react';
import styled, { css } from 'styled-components';

import useControlledOrUncontrolled from '../common/hooks/useControlledOrUncontrolled';
import { LabelText, StyledLabel } from '../common/SwitchBase';
import { CommonStyledProps } from '../types';

type TreeLeaf<T> = {
  disabled?: boolean;
  icon?: React.ReactNode;
  id: T;
  items?: TreeLeaf<T>[];
  label?: string;
};

type TreeViewProps<T> = {
  className?: string;
  defaultExpanded?: T[];
  defaultSelected?: T;
  disabled?: boolean;
  expanded?: T[];
  onNodeSelect?: (event: React.MouseEvent<HTMLElement>, id: T) => void;
  onNodeToggle?: (
    event: React.MouseEvent<HTMLElement>,
    expandedIds: T[]
  ) => void;
  selected?: T;
  style?: React.CSSProperties;
  tree: TreeLeaf<T>[];
} & CommonStyledProps;

type TreeBranchProps<T> = {
  className: string | undefined;
  disabled: boolean;
  expanded: T[];
  innerRef?: React.Ref<HTMLUListElement>;
  level: number;
  select: (event: React.MouseEvent<HTMLElement>, item: TreeLeaf<T>) => void;
  selected: T | undefined;
  style: React.CSSProperties | undefined;
  tree: TreeLeaf<T>[];
} & CommonStyledProps;

const Text = styled(LabelText)`
  white-space: nowrap;
`;

const focusedElementStyles = css<{ $disabled: boolean }>`
  :focus {
    outline: none;
  }

  ${({ $disabled }) =>
    !$disabled
      ? css`
          cursor: pointer;

          :focus {
            ${Text} {
              background: ${({ theme }) => theme.hoverBackground};
              color: ${({ theme }) => theme.materialTextInvert};
              outline: 2px dotted ${({ theme }) => theme.focusSecondary};
            }
          }
        `
      : `cursor: default;`}
`;

const TreeWrapper = styled.ul<{ isRootLevel: boolean }>`
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

const TreeItem = styled.li<{ hasItems: boolean; isRootLevel: boolean }>`
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

function toggleItem<T>(state: T[], id: T) {
  return state.includes(id)
    ? state.filter(item => item !== id)
    : [...state, id];
}

function preventDefault(event: React.SyntheticEvent) {
  event.preventDefault();
}

function TreeBranch<T>({
  className,
  disabled,
  expanded,
  innerRef,
  level,
  select,
  selected,
  style,
  tree = []
}: TreeBranchProps<T>) {
  const isRootLevel = level === 0;

  const renderLeaf = useCallback(
    (item: TreeLeaf<T>) => {
      const hasItems = Boolean(item.items && item.items.length > 0);
      const isMenuShown = expanded.includes(item.id);
      const isNodeDisabled = (disabled || item.disabled) ?? false;
      const onClickSummary = !isNodeDisabled
        ? (event: React.MouseEvent<HTMLLabelElement>) => select(event, item)
        : preventDefault;
      const onClickLeaf = !isNodeDisabled
        ? (event: React.MouseEvent<HTMLElement>) => select(event, item)
        : preventDefault;
      const isSelected = selected === item.id;
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
              $disabled={isNodeDisabled}
              onClick={onClickLeaf}
            >
              {icon}
              <Text>{item.label}</Text>
            </TitleWithIcon>
          ) : (
            <Details open={isMenuShown}>
              <Summary onClick={onClickSummary} $disabled={isNodeDisabled}>
                <TitleWithIcon $disabled={isNodeDisabled}>
                  {icon}
                  <Text>{item.label}</Text>
                </TitleWithIcon>
              </Summary>

              {isMenuShown && (
                <TreeBranch
                  className={className}
                  disabled={isNodeDisabled}
                  expanded={expanded}
                  level={level + 1}
                  select={select}
                  selected={selected}
                  style={style}
                  tree={item.items ?? []}
                />
              )}
            </Details>
          )}
        </TreeItem>
      );
    },
    [className, disabled, expanded, isRootLevel, level, select, selected, style]
  );

  return (
    <TreeWrapper
      className={isRootLevel ? className : undefined}
      style={isRootLevel ? style : undefined}
      ref={isRootLevel ? innerRef : undefined}
      role={isRootLevel ? 'tree' : 'group'}
      isRootLevel={isRootLevel}
    >
      {tree.map(renderLeaf)}
    </TreeWrapper>
  );
}

function TreeInner<T>(
  {
    className,
    defaultExpanded = [],
    defaultSelected,
    disabled = false,
    expanded,
    onNodeSelect,
    onNodeToggle,
    selected,
    style,
    tree = []
  }: TreeViewProps<T>,
  ref: React.ForwardedRef<HTMLUListElement>
) {
  const [expandedInternal, setExpandedInternal] = useControlledOrUncontrolled({
    defaultValue: defaultExpanded,
    onChange: onNodeToggle,
    onChangePropName: 'onNodeToggle',
    value: expanded,
    valuePropName: 'expanded'
  });

  const [selectedInternal, setSelectedInternal] = useControlledOrUncontrolled({
    defaultValue: defaultSelected,
    onChange: onNodeSelect,
    onChangePropName: 'onNodeSelect',
    value: selected,
    valuePropName: 'selected'
  });

  const toggleMenu = useCallback(
    (event: React.MouseEvent<HTMLElement>, id: T) => {
      if (onNodeToggle) {
        const newState = toggleItem(expandedInternal, id);
        onNodeToggle(event, newState);
      }

      setExpandedInternal(previouslyExpandedIds =>
        toggleItem(previouslyExpandedIds, id)
      );
    },
    [expandedInternal, onNodeToggle, setExpandedInternal]
  );

  const select = useCallback(
    (event: React.MouseEvent<HTMLElement>, id: T) => {
      setSelectedInternal(id);

      if (onNodeSelect) {
        onNodeSelect(event, id);
      }
    },
    [onNodeSelect, setSelectedInternal]
  );

  const handleSelect = useCallback(
    (event: React.MouseEvent<HTMLElement>, item: TreeLeaf<T>) => {
      event.preventDefault();
      select(event, item.id);
      if (item.items && item.items.length) {
        toggleMenu(event, item.id);
      }
    },
    [select, toggleMenu]
  );

  return (
    <TreeBranch
      className={className}
      disabled={disabled}
      expanded={expandedInternal}
      level={0}
      innerRef={ref}
      select={handleSelect}
      selected={selectedInternal}
      style={style}
      tree={tree}
    />
  );
}

/* eslint-disable no-use-before-define */
const TreeView = forwardRef(TreeInner) as <T>(
  // eslint-disable-next-line no-use-before-define
  props: TreeViewProps<T> & { ref?: React.ForwardedRef<HTMLUListElement> }
) => ReturnType<typeof TreeInner<T>>;
/* eslint-enable no-use-before-define */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
TreeView.displayName = 'TreeView';

export { TreeView, TreeViewProps, TreeLeaf };
