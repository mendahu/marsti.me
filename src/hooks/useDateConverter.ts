import { MarsDate } from "mars-date-utils";
import { useEffect, useState } from "react";
import { addLeadingZeros } from "../helpers/addLeadingZeros";
import { generateTimezoneString } from "../helpers/generateTimezoneString";

export const useDateConverter = () => {
  const now = new Date();

  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());
  const [day, setDay] = useState(now.getDate());
  const [hour, setHour] = useState(now.getHours());
  const [minute, setMinute] = useState(now.getMinutes());
  const [second, setSecond] = useState(now.getSeconds());
  const [timezone, setTimezone] = useState(now.getTimezoneOffset());

  const [marsDate, setMarsDate] = useState(new MarsDate(now));

  const createMarsDate = (dateString: string) => {
    const date = new Date(dateString);
    return new MarsDate(date);
  };

  useEffect(() => {
    const dateString = `${addLeadingZeros(year, 4)}-${addLeadingZeros(
      month + 1,
      2
    )}-${addLeadingZeros(day, 2)}T${addLeadingZeros(hour, 2)}:${addLeadingZeros(
      minute,
      2
    )}:${addLeadingZeros(second, 2)}${generateTimezoneString(
      convertTimezoneToSliderVal(timezone)
    )}`;

    setMarsDate(createMarsDate(dateString));
  }, [year, month, day, hour, second, minute, timezone]);

  const convertTimezoneToSliderVal = (offset: number) => {
    return -offset / 15;
  };

  const setTimezoneFromSliderVal = (val: string) => {
    const num = Number(val);
    setTimezone(-num * 15);
  };

  return {
    year: {
      value: year.toString(),
      set: setYear,
    },
    month: {
      value: (month + 1).toString(),
      set: (num: number) => setMonth(num - 1),
    },
    day: {
      value: day.toString(),
      set: setDay,
    },
    hour: {
      value: hour.toString(),
      set: setHour,
    },
    minute: {
      value: minute.toString(),
      set: setMinute,
    },
    second: {
      value: second.toString(),
      set: setSecond,
    },
    timezone: {
      value: convertTimezoneToSliderVal(timezone),
      set: setTimezoneFromSliderVal,
    },
    marsDate,
  };
};
