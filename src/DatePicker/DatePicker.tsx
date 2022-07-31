import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';

import { Button } from '../Button/Button';
import { NumberField } from '../NumberField/NumberField';
import { ScrollView } from '../ScrollView/ScrollView';
import { Select } from '../Select/Select';
import { SelectChangeEvent } from '../Select/Select.types';
import { Toolbar } from '../Toolbar/Toolbar';
import { Window } from '../Window/Window';
import { WindowContent } from '../WindowContent/WindowContent';
import { WindowHeader } from '../WindowHeader/WindowHeader';

type DatePickerProps = {
  className?: string;
  date?: string;
  onAccept?: (chosenDate: string) => void;
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;
  shadow?: boolean;
};

const Calendar = styled(ScrollView)`
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

const DateItemContent = styled.span<{ active: boolean }>`
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

function daysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function dayIndex(year: number, month: number, day: number) {
  return new Date(year, month, day).getDay();
}

function convertDateToState(stringDate: string) {
  const date = new Date(Date.parse(stringDate));
  const day = date.getUTCDate();
  const month = date.getUTCMonth();
  const year = date.getUTCFullYear();

  return { day, month, year };
}

const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      className,
      date: initialDate = new Date().toISOString(),
      onAccept,
      onCancel,
      shadow = true
    },
    ref
  ) => {
    const [date, setDate] = useState(() => convertDateToState(initialDate));
    const { year, month, day } = date;

    const handleMonthSelect = useCallback((e: SelectChangeEvent<number>) => {
      setDate(currentDate => ({ ...currentDate, month: e.target.value }));
    }, []);

    const handleYearSelect = useCallback((yearSelected: number) => {
      setDate(currentDate => ({ ...currentDate, year: yearSelected }));
    }, []);

    const handleDaySelect = useCallback((daySelected: number) => {
      setDate(currentDate => ({ ...currentDate, day: daySelected }));
    }, []);

    const handleAccept = useCallback(() => {
      const chosenDate = [date.year, date.month + 1, date.day]
        .map(part => String(part).padStart(2, '0'))
        .join('-');

      onAccept?.(chosenDate);
    }, [date.day, date.month, date.year, onAccept]);

    const dayPickerItems = useMemo(() => {
      const items: React.ReactNode[] = Array.from({ length: 42 });
      const firstDayIndex = dayIndex(year, month, 1);
      let itemDay = day;

      const daysNumber = daysInMonth(year, month);
      itemDay = itemDay < daysNumber ? itemDay : daysNumber;
      items.forEach((_, i) => {
        if (i >= firstDayIndex && i < daysNumber + firstDayIndex) {
          const dayNumber = i - firstDayIndex + 1;

          items[i] = (
            <DateItem
              key={i}
              onClick={() => {
                handleDaySelect(dayNumber);
              }}
            >
              <DateItemContent active={dayNumber === itemDay}>
                {dayNumber}
              </DateItemContent>
            </DateItem>
          );
        } else {
          items[i] = <DateItem key={i} />;
        }
      });
      return items;
    }, [day, handleDaySelect, month, year]);

    return (
      <Window
        className={className}
        ref={ref}
        shadow={shadow}
        style={{ margin: 20 }}
      >
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
              onChange={handleMonthSelect}
              width={128}
              menuMaxHeight={200}
            />
            <NumberField value={year} onChange={handleYearSelect} width={100} />
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
            <Button fullWidth onClick={onCancel} disabled={!onCancel}>
              Cancel
            </Button>
            <Button
              fullWidth
              onClick={onAccept ? handleAccept : undefined}
              disabled={!onAccept}
            >
              OK
            </Button>
          </Toolbar>
        </WindowContent>
      </Window>
    );
  }
);

// eslint-disable-next-line camelcase
export { DatePicker as DatePicker__UNSTABLE, DatePickerProps };
