export const formatLs = (ls: number, sigDigits: number = 3): string => {
  return (
    (
      Math.round(ls * Math.pow(10, sigDigits)) / Math.pow(10, sigDigits)
    ).toString() + "°"
  );
};
