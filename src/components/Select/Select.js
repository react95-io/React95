import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./Select.css";

import SelectItem from "./SelectItem/SelectItem";

import Cutout from "../Cutout/Cutout";

export class Select extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    selectedIndex: PropTypes.number,
    noShadow: PropTypes.bool,
    onSelect: PropTypes.func.isRequired
  };
  static defaultProps = {
    style: {},
    noShadow: false,
    selectedIndex: 0
  };

  state = {
    items: this.props.items || [],
    open: false,
    selectedItem: this.props.selectedIndex || 0
  };

  toggle = () => this.setState(prevState => ({ open: !prevState.open }));

  handleSelect = index => {
    this.props.onSelect(this.state.items[index].value);
    this.setState({ selectedItem: index, open: false });
  };

  render() {
    const {
      noShadow,
      width,
      height,
      otherProps,
      className,
      style
    } = this.props;
    const { items, selectedItem, open } = this.state;
    const baseClass = "Select";

    const rootClass = cx(baseClass, {
      [`${baseClass}--noShadow`]: noShadow,
      [`${baseClass}--fixedHeight`]: height
    });
    return (
      <div
        className={cx(`${baseClass}-wrapper`, className)}
        style={{ ...style, width: width ? width : "auto" }}
      >
        <Cutout>
          <button onClick={this.toggle} className={`${baseClass}-header`}>
            {items.length ? items[selectedItem].title : ""}
            <span className={`${baseClass}-button`}>
              <span className={`${baseClass}-button__icon`} />
            </span>
          </button>
        </Cutout>
        {open && (
          <ul
            className={rootClass}
            {...otherProps}
            style={{ height: height ? height : "auto" }}
          >
            {items.map((item, i) => (
              <SelectItem key={i} onClick={() => this.handleSelect(i)}>
                {item.title}
              </SelectItem>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
export default Select;
