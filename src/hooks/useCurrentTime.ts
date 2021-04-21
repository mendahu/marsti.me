import { MarsDate } from "mars-date-utils";
import { useEffect, useState } from "react";

export const useCurrentTime = (lon: number = 0) => {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  const resetClock = () => {
    const cd = new MarsDate(new Date());
    const mst = cd.getLMST(lon);

    const breakBits = (mst: string) => {
      return {
        hour: Number(mst.slice(0, 2)),
        minute: Number(mst.slice(3, 5)),
        second: Number(mst.slice(6, 8)),
      };
    };

    const bits = breakBits(mst);

    setHour(bits.hour);
    setMin(bits.minute);
    setSec(bits.second);
  };

  useEffect(() => {
    resetClock();
  }, []);

  useEffect(() => {
    setInterval(() => {
      resetClock();
    }, 1000);
  }, []);

  const addLeadingZero = (num: number) => {
    return ("0" + num).toString().slice(-2);
  };

  return {
    hour: addLeadingZero(hour),
    min: addLeadingZero(min),
    sec: addLeadingZero(sec),
  };
};
