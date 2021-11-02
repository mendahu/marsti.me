export function isValidDate(d: Date) {
  return d instanceof Date && !isNaN(d.getTime());
}

export function isInThePast(d: Date) {
  const now = new Date();
  return d < now;
}
