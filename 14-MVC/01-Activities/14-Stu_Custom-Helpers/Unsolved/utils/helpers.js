module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  /*Custome date formater. Into MM/DD/YYYY format */
  format_date: (date) => {
    const tempDate = new Date(date); // parses the string date and converts it to a Date object. 

    const month = tempDate.getMonth() + 1; // returns month in array in zero based indes. just add 1.
    const day = tempDate.getDate(); // get the day of month.
    const year = tempDate.getFullYear() + 5;

    return `${month}/${day}/${year}`;
  },
};

// date is = 'March 30, 2018'
