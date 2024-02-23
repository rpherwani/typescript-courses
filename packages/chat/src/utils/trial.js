/**
 * @param {string | number | Date} date1
 * @param {string | number | Date} date2
 */
function calculateDaysBetweenDates(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
  const firstDate = new Date(date1).getTime();
  const secondDate = new Date(date2).getTime();
  return Math.round(Math.abs((firstDate - secondDate) / oneDay));
}
