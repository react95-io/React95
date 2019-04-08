import React, { Component } from "react";
import propTypes from "prop-types";

import styled from "styled-components";
import { darken } from "polished";

import { Window } from "../";
import { WindowHeader } from "../";
import { WindowContent } from "../";
import { Select } from "../";
import { NumberField } from "../";
import { Cutout } from "../";
import { Button } from "../";
import { Toolbar } from "../";

const Calendar = styled(Cutout)`
  width: 234px;
  margin: 1rem 0;
  background: ${({ theme }) => theme.canvas};
`;
const WeekDays = styled.div`
  display: flex;
  background: ${({ theme }) => darken(0.2, theme.material)};
  color: #dfe0e3;
`;
const Dates = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const DateItem = styled.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`;
const DateItemContent = styled.span`
  cursor: pointer;

  background: ${({ active, theme }) =>
    active ? theme.hoverBackground : "transparent"};
  color: ${({ active, theme }) => (active ? theme.textInvert : "initial")};

  &:hover {
    border: 2px dashed
      ${({ theme, active }) => (active ? "none" : darken(0.2, theme.material))};
  }
`;

function daysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
function dayIndex(year, month, day) {
  return new Date(year, month, day).getDay();
}
class DatePicker extends Component {
  static propTypes = {
    className: propTypes.string,
    shadow: propTypes.bool,
    onChange: propTypes.func.isRequired,
    onCancel: propTypes.func.isRequired
  };
  static defaultProps = {
    shadow: true,
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
    const { shadow, className, onCancel } = this.props;
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
    // console.log("days in month: ", daysInMonth(year, month));
    // console.log("day index", dayIndex(year, month, day));
    // console.log("first day index", dayIndex(year, month, 1));

    const dayPickerItems = Array.apply(null, { length: 35 });
    const firstDayIndex = dayIndex(year, month, 1);
    const daysNumber = daysInMonth(year, month);
    day = day < daysNumber ? day : daysNumber;
    dayPickerItems.forEach((item, i) => {
      if (i >= firstDayIndex && i < daysNumber + firstDayIndex) {
        let dayNumber = i - firstDayIndex + 1;

        dayPickerItems[i] = (
          <DateItem
            key={i}
            onClick={() => {
              this.handleDaySelect(dayNumber);
            }}
          >
            <DateItemContent active={dayNumber === day}>
              {dayNumber}
            </DateItemContent>
          </DateItem>
        );
      } else {
        dayPickerItems[i] = <DateItem key={i} />;
      }
    });

    return (
      <Window style={{ margin: 20 }} className={className} shadow={shadow}>
        <WindowHeader>📆 Date</WindowHeader>
        <WindowContent>
          <Toolbar noPadding style={{ justifyContent: "space-between" }}>
            <Select
              items={months}
              selectedIndex={month - 1}
              onChange={this.handleMonthSelect}
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
          </Toolbar>
          <Calendar>
            <WeekDays>
              <DateItem>S</DateItem>
              <DateItem>M</DateItem>
              <DateItem>T</DateItem>
              <DateItem>W</DateItem>
              <DateItem>T</DateItem>
              <DateItem>F</DateItem>
              <DateItem>S</DateItem>
            </WeekDays>
            <Dates>{dayPickerItems}</Dates>
          </Calendar>
          <Toolbar noPadding style={{ justifyContent: "space-between" }}>
            <Button fullWidth onClick={onCancel} disabled>
              Cancel
            </Button>
            <Button fullWidth onClick={this.handleChange}>
              OK
            </Button>
          </Toolbar>
        </WindowContent>
      </Window>
    );
  }
}

export default DatePicker;
