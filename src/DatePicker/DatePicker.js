import React, { Component } from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';

import Window from '../Window/Window';
import WindowHeader from '../WindowHeader/WindowHeader';
import WindowContent from '../WindowContent/WindowContent';
import Select from '../Select/Select';
import NumberField from '../NumberField/NumberField';
import Cutout from '../Cutout/Cutout';
import Button from '../Button/Button';
import Toolbar from '../Toolbar/Toolbar';

const Calendar = styled(Cutout)`
  width: 234px;
  margin: 1rem 0;
  background: ${({ theme }) => theme.canvas};
`;

const WeekDays = styled.div`
  display: flex;
  background: ${({ theme }) => theme.materialDark};
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
    active ? theme.hoverBackground : 'transparent'};
  color: ${({ active, theme }) =>
    active ? theme.canvasTextInvert : theme.canvasText};

  &:hover {
    border: 2px dashed
      ${({ theme, active }) => (active ? 'none' : theme.materialDark)};
  }
`;

function daysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function dayIndex(year, month, day) {
  return new Date(year, month, day).getDay();
}

class DatePicker extends Component {
  static propTypes = {
    className: propTypes.string,
    shadow: propTypes.bool,
    onAccept: propTypes.func,
    onCancel: propTypes.func,
    date: propTypes.instanceOf(Date)
  };

  static defaultProps = {
    shadow: true,
    className: '',
    onAccept: null,
    onCancel: null,
    date: null
  };

  constructor(props) {
    super(props);

    const initialDate = this.convertDateToState(props.date || new Date());
    this.state = initialDate;
  }

  convertDateToState = date => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return { day, month, year };
  };

  handleMonthSelect = e => this.setState({ month: e.target.value });

  handleYearSelect = year => this.setState({ year });

  handleDaySelect = day => this.setState({ day });

  handleAccept = () => {
    const { year, month, day } = this.state;
    const { onAccept } = this.props;
    const date = new Date(year, month, day);

    onAccept(date);
  };

  render() {
    let { day } = this.state;
    const { month, year } = this.state;
    const { shadow, className, onAccept, onCancel } = this.props;

    const months = [
      { value: 0, label: 'January' },
      { value: 1, label: 'February' },
      { value: 2, label: 'March' },
      { value: 3, label: 'April' },
      { value: 4, label: 'May' },
      { value: 5, label: 'June' },
      { value: 6, label: 'July' },
      { value: 7, label: 'August' },
      { value: 8, label: 'September' },
      { value: 9, label: 'October' },
      { value: 10, label: 'November' },
      { value: 11, label: 'December' }
    ];

    // eslint-disable-next-line
    const dayPickerItems = Array.apply(null, { length: 42 });
    const firstDayIndex = dayIndex(year, month, 1);

    const daysNumber = daysInMonth(year, month);
    day = day < daysNumber ? day : daysNumber;
    dayPickerItems.forEach((item, i) => {
      if (i >= firstDayIndex && i < daysNumber + firstDayIndex) {
        const dayNumber = i - firstDayIndex + 1;

        dayPickerItems[i] = (
          <DateItem
            // eslint-disable-next-line
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
        dayPickerItems[i] = (
          <DateItem
            // eslint-disable-next-line
            key={i}
          />
        );
      }
    });

    return (
      <Window style={{ margin: 20 }} className={className} shadow={shadow}>
        <WindowHeader>
          <span role='img' aria-label='📆'>
            📆
          </span>
          Date
        </WindowHeader>
        <WindowContent>
          <Toolbar noPadding style={{ justifyContent: 'space-between' }}>
            <Select
              options={months}
              value={month}
              onChange={this.handleMonthSelect}
              width={128}
              menuMaxHeight={200}
            />
            <NumberField
              value={year}
              disableKeyboardInput
              onChange={this.handleYearSelect}
              width={100}
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
          <Toolbar noPadding style={{ justifyContent: 'space-between' }}>
            <Button
              fullWidth
              onClick={onCancel || undefined}
              disabled={!onCancel}
            >
              Cancel
            </Button>
            <Button
              fullWidth
              onClick={onAccept ? this.handleAccept : undefined}
              disabled={!onAccept}
            >
              OK
            </Button>
          </Toolbar>
        </WindowContent>
      </Window>
    );
  }
}

export default DatePicker;
