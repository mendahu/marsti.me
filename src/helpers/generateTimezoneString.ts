export const generateTimezoneString = (timezone: number) => {
  console.log(timezone);
  const sign = timezone < 0 ? "-" : "+";

  const hours = Math.trunc(timezone / 4);
  const hour = ("0" + Math.abs(hours)).toString().slice(-2);

  const minutes = (timezone * 15) % 60;
  const min = ("0" + minutes).toString().slice(-2);

  const tzString = `${sign}${hour}:${min}`;
  console.log(tzString);
  return tzString;
};
