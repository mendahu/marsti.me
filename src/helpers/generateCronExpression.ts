export const generateCronExpression = (dateObj: Date) => {
  const min = (dateObj.getUTCMinutes() + 5) % 59; // five minute buffer to prevent same day overlap error
  const hour = dateObj.getUTCHours();
  const date = dateObj.getUTCDate();
  const month = dateObj.getUTCMonth() + 1;
  const year = dateObj.getUTCFullYear();

  const cronExpression = `${min} ${hour} ${date} ${month} * ${year}`;

  return cronExpression;
};
