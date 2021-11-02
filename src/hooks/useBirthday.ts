import { format } from "date-fns";
import { MarsDate } from "mars-date-utils";
import { useState } from "react";
import { formatLs } from "../helpers/formatLs";
import { getSeason } from "../helpers/getSeason";
import { useRouter } from "next/router";

const useBirthday = (date?: Date) => {
  const router = useRouter();
  const [earthBirthday, setEarthBirthday] = useState<Date | null>(date || null);
  const marsDate = new MarsDate(earthBirthday);

  const ageInYears = Math.round(marsDate.getAgeInYears());
  const nextBirthday = format(
    marsDate.getNextAnniversary(),
    "EEEE, MMMM do, yyyy"
  );

  const year = marsDate.getCalendarYear().toString();
  const ls = formatLs(marsDate.getLs());
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
