import React, { useState } from 'react';
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

const DatePicker = props => {
  const { className, shadow, onAccept, onCancel, date } = props;

  const initialDate = date || new Date();

  const [day, setDay] = useState(initialDate.getDate());
  const [month, setMonth] = useState(initialDate.getMonth());
  const [year, setYear] = useState(initialDate.getFullYear());

  // eslint-disable-next-line
  const dayPickerItems = Array.apply(null, { length: 35 });
  const firstDayIndex = dayIndex(year, month, 1);

  const daysNumber = daysInMonth(year, month);

  dayPickerItems.forEach((_, i) => {
    if (i >= firstDayIndex && i < daysNumber + firstDayIndex) {
      const dayNumber = i - firstDayIndex + 1;

      dayPickerItems[i] = (
        <DateItem key={i} onClick={() => setDay(dayNumber)}>
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
            onChange={e => setMonth(e.target.value)}
            width={128}
            menuMaxHeight={200}
          />
          <NumberField
            value={year}
            disableKeyboardInput
            onChange={y => setYear(parseInt(y, 10))}
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
            data-testid='cancel'
            fullWidth
            onClick={() => {
              onCancel();
            }}
            disabled={!onCancel}
          >
            Cancel
          </Button>
          <Button
            data-testid='ok'
            fullWidth
            onClick={() => {
              onAccept(new Date(year, month, day));
            }}
            disabled={!onAccept}
          >
            OK
          </Button>
        </Toolbar>
      </WindowContent>
    </Window>
  );
};

DatePicker.defaultProps = {
  shadow: true,
  className: '',
  onAccept: null,
  onCancel: null,
  date: null
};

DatePicker.propTypes = {
  className: propTypes.string,
  shadow: propTypes.bool,
  onAccept: propTypes.func,
  onCancel: propTypes.func,
  date: propTypes.instanceOf(Date)
};

export default DatePicker;
