import { add } from "date-fns";

export const generateCronExpression = (dateObj: Date) => {
  // Add five minute buffer to prevent same day overlap
  const bufferedTime = add(dateObj, { minutes: 5 });

  const min = bufferedTime.getUTCMinutes();
  const hour = bufferedTime.getUTCHours();
  const date = bufferedTime.getUTCDate();
  const month = bufferedTime.getUTCMonth() + 1; // Cron expression does not start months at zero
  const year = bufferedTime.getUTCFullYear();

  const cronExpression = `${min} ${hour} ${date} ${month} * ${year}`;

  return cronExpression;
};
