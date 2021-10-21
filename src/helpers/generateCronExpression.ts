export const generateCronExpression = (dateObj: Date) => {
  const min = dateObj.getUTCMinutes();
  const hour = dateObj.getUTCHours();
  const date = dateObj.getUTCDate();
  const month = dateObj.getUTCMonth() + 1;
  const year = dateObj.getUTCFullYear();

  const cronExpression = `${min} ${hour} ${date} ${month} * ${year}`;

  return cronExpression;
};
