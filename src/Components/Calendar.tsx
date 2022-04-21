import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { addDays, format, getDate, isSameDay, startOfWeek } from "date-fns";

interface dateIF {
  id: number;
  title: string;
}

interface weekDayIF {
  formatted: string;
  date: Date;
  day: number;
}

type Props = {
  date: Date;
  onChange: (value: Date) => void;
};

//get Week Days function using the date-fns library
export const getWeekDays = (date: Date): weekDayIF[] => {
  const start = startOfWeek(date, { weekStartsOn: 1 });
  const final: weekDayIF[] = [];

  for (let i = 0; i < 7; i++) {
    const date = addDays(start, i);
    final.push({
      formatted: format(date, "EEEEEE"),
      date: date,
      day: getDate(date)
    });
  }
  return final;
};

export const CALENDAR = ({ date, onChange }: Props) => {
  const [week, setWeek] = useState<weekDayIF[]>([]);

  useEffect(() => {
    const weekDays = getWeekDays(date);
    setWeek(weekDays);
  }, [date]);

  const showDate = week.map((weekDay) => (
    <li key={weekDay.formatted} className="date_list">
      {weekDay.formatted}
    </li>
  ));

  const showDay = week.map((weekDay) => (
    <li key={weekDay.formatted} className="date_list">
      {weekDay.day}
    </li>
  ));

  return (
    <div className="calendar_wrapper">
      <div className="date">
        <ul>{showDate}</ul>
      </div>
      <div className="date">
        <ul>{showDay}</ul>
      </div>
    </div>
  );
};
