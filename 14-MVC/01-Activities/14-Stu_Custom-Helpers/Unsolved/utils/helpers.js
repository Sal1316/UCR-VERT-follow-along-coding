module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  /*TODO: Create a custom helper 'format_date' that takes in a timestamp,
  adds five years to the date, and formats it as M/D/YYYY*/
  format_date: (date) => {
    const tempDate = new Date(date);

    const month = tempDate.getMonth() + 1; // returns month in array in zero based indes. just add 1.
    const day = tempDate.getDate(); // get the day of month.
    const year = tempDate.getFullYear() + 5;

    return `${month}/${day}/${year}`;
  },
};
