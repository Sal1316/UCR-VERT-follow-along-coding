// Use Day.js to format the date and assign to the declared variable.
var today = dayjs();// replace ll dayjs() eventually bc of the delay.

// TODO: 1. What is your graduation date in the following format: Jan 1, 1999?
var reformatDate = dayjs('2023-12-14').format('MMM, D YYYY');
$('#1a').text(reformatDate);

// TODO: 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)
var dayOfWeek =  dayjs('01-01-2027', 'MM-DD-YYYY').format('It will be, dddd');
$('#2a').text(dayOfWeek);

// TODO: 3. What is the current time in the format: hours:minutes:seconds
var currentTime = dayjs().format('[The time is: ] h:mm:ss a');
$('#3a').text(currentTime);

// TODO: 4. What is the current Unix timestamp?
var currUnixTime = Math.floor(Date.now()/1000);
$('#4a').text('Using Date.now(), the current timestamp is: ' + currUnixTime);

var unixTime = Math.floor(dayjs()/1000);
$('#4b').text('Using dayjs(), the current timestamp is: '+unixTime);

var unix = dayjs().unix();
$('#4c').text('Using unix(), the current timestamp is: '+unix);


// TODO: 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var timeStamp = 1318781876;
var dateObj = dayjs.unix(timeStamp);
var formattedDate = dateObj.format('MM-DD-YYYY, h:mm:ss a');
$('#5a').text(formattedDate);

/* TODO: 6. What is the difference in days between May 4, 2027 and today? Hint:
You can display the difference between two dayjs objects by using the dayjs diff method.)*/

// var date1 = dayjs('2022-07-27')
// var date2 = dayjs('2023-07-27')

var date1 = dayjs().format('DD-MM-YYYY');// 
var date2 = dayjs('2027-05-04','YYYY-MM-DD').format('DD-MM-YYYY'); //bigger one

console.log('date1: ' + date1);
console.log('date2: ' + date2);

var dayDifference = date2.diff(date1,"day"); // to use .diff() dont use .formating on dayjs(). or else get an error

$('#6a').text("The difference in days is: " + dayDifference);
