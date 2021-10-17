import { format } from "date-fns";
import { MarsDate } from "mars-date-utils";
import { useState } from "react";
import { getSeason } from "../helpers/getSeason";

const useBirthday = (date?: Date) => {
  const [earthBirthday, setEarthBirthday] = useState<Date | null>(date || null);
  const marsDate = new MarsDate(earthBirthday);

  const ageInYears = Math.round(marsDate.getAgeInYears());
  const nextBirthday = format(
    marsDate.getNextAnniversary(),
    "EEEE, MMMM do, yyyy"
  );

  const year = marsDate.getCalendarYear().toString();
  const ls = (Math.round(marsDate.getLs() * 1000) / 1000).toString() + "°";
  const time = marsDate.getMST();
  const season = getSeason(marsDate.getLs());

  return {
    birthdayData: {
      year,
      season,
      ls,
      time,
    },
    earthBirthday,
    setEarthBirthday,
    ageInYears,
    nextBirthday,
  };
};

export default useBirthday;
