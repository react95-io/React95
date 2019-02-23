import React, { Component } from "react";
import propTypes from "prop-types";
import cx from "classnames";

import "./DatePicker.css";

import Window from "../Window/Window";
import WindowHeader from "../WindowHeader/WindowHeader";
import WindowContent from "../WindowContent/WindowContent";
import Select from "../Select/Select";
import NumberField from "../NumberField/NumberField";
import Cutout from "../Cutout/Cutout";
import Button from "../Button/Button";

function daysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
function dayIndex(year, month, day) {
  return new Date(year, month, day).getDay();
}
class DatePicker extends Component {
  static propTypes = {
    className: propTypes.string,
    noShadow: propTypes.bool,
    onChange: propTypes.func.isRequired,
    onCancel: propTypes.func.isRequired
  };
  static defaultProps = {
    style: {}
  };

  state = {
    day: 10,
    month: 2,
    year: 2019
  };
  handleMonthSelect = month => this.setState({ month });
  handleYearSelect = year => this.setState({ year });
  handleDaySelect = day => this.setState({ day });
  handleChange = () => {
    const { year, month, day } = this.state;
    const date = new Date(year, month, day);
    this.props.onChange(date);
  };
  render() {
    let { day, month, year } = this.state;
    const { noShadow, className, onCancel } = this.props;
    const baseClass = "DatePicker";

    const months = [
      { value: 1, title: "January" },
      { value: 2, title: "February" },
      { value: 3, title: "March" },
      { value: 4, title: "April" },
      { value: 5, title: "May" },
      { value: 6, title: "June" },
      { value: 7, title: "July" },
      { value: 8, title: "August" },
      { value: 9, title: "September" },
      { value: 10, title: "October" },
      { value: 11, title: "November" },
      { value: 12, title: "December" }
    ];
    console.log("days in month: ", daysInMonth(year, month));
    console.log("day index", dayIndex(year, month, day));
    console.log("first day index", dayIndex(year, month, 1));

    const dayPickerItems = Array.apply(null, { length: 35 });
    const firstDayIndex = dayIndex(year, month, 1);
    const daysNumber = daysInMonth(year, month);
    day = day < daysNumber ? day : daysNumber;
    dayPickerItems.forEach((item, i) => {
      console.log("swag");
      if (i >= firstDayIndex && i < daysNumber + firstDayIndex) {
        let dayNumber = i - firstDayIndex + 1;
        console.log(dayNumber);

        dayPickerItems[i] = (
          <div
            key={i}
            onClick={() => {
              console.log("🥩", dayNumber);
              this.handleDaySelect(dayNumber);
            }}
            className={`${baseClass}-datePicker__item`}
          >
            <span
              className={cx(`${baseClass}-datePicker__item-content`, {
                [`${baseClass}-datePicker__item-content--active`]:
                  dayNumber === day
              })}
            >
              {dayNumber}
            </span>
          </div>
        );
      } else {
        dayPickerItems[i] = (
          <div key={i} className={`${baseClass}-datePicker__item`} />
        );
      }
    });
    console.log(dayPickerItems);

    return (
      <Window style={{ margin: 20 }} className={className} noShadow={noShadow}>
        <WindowHeader>📆 Date</WindowHeader>
        <WindowContent>
          <div className={`${baseClass}-toolbar`}>
            <Select
              items={months}
              selectedIndex={month - 1}
              onSelect={this.handleMonthSelect}
              width={128}
              height={200}
              className={`${baseClass}-toolbar__input`}
            />
            <NumberField
              value={year}
              disableKeyboardInput
              onChange={this.handleYearSelect}
              width={100}
              className={`${baseClass}-toolbar__input`}
            />
          </div>
          <Cutout className={`${baseClass}-datePicker`}>
            <div className={`${baseClass}-dayNames`}>
              <div className={`${baseClass}-datePicker__item`}>S</div>
              <div className={`${baseClass}-datePicker__item`}>M</div>
              <div className={`${baseClass}-datePicker__item`}>T</div>
              <div className={`${baseClass}-datePicker__item`}>W</div>
              <div className={`${baseClass}-datePicker__item`}>T</div>
              <div className={`${baseClass}-datePicker__item`}>F</div>
              <div className={`${baseClass}-datePicker__item`}>S</div>
            </div>
            <div className={`${baseClass}-dates`}>{dayPickerItems}</div>
          </Cutout>
          <div className={`${baseClass}-buttons`}>
            <Button fullWidth onClick={onCancel}>
              Cancel
            </Button>
            <Button fullWidth onClick={this.handleChange}>
              OK
            </Button>
          </div>
        </WindowContent>
      </Window>
    );
  }
}

export default DatePicker;
