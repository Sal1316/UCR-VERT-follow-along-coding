module.exports = {
  // the helper method 'format_time' will take in a timestamp and return a string with only the time
  format_time: (timestamp) => {
    // We use the 'toLocaleTimeString()' method to format the time as H:MM:SS AM/PM. Just extracts the time not the date.
    return timestamp.toLocaleTimeString();
  },
  formatted_date: (dateStamp) => {
    const dateBeforeChange = new Date(dateStamp); // passing in here bc Date takes in that date format.

    const month = dateBeforeChange.getMonth() + 1;
    const day = dateBeforeChange.getDay();
    const year = dateBeforeChange.getFullYear();

    const dateAfterChange = `${month}/${day}/${year} At: 7am`;

    return dateAfterChange;
  },
};

/*


*/
