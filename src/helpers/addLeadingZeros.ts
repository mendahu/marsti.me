export const addLeadingZeros = (num: number, size: number): string => {
  let prepender = "";
  for (let i = 1; i < size; i++) {
    prepender += "0";
  }
  return (prepender + num).toString().slice(-size);
};
