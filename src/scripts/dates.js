const Today = new Date();
const todaysDate = Today.toLocaleDateString();
const todaysDayOfMonth = Today.getDate();
const todaysDayOfWeek = Today.getDay();
const currentYear = Today.getFullYear();
const currentMonth = Today.getMonth();

// alert(Today);
// alert(todaysDate);
// alert(todaysDayOfMonth);
// alert(todaysDayOfWeek);

const currentDisplayMonth = Today.toLocaleString("default", { month: "long" });

function findMonday() {
  var Monday = new Date(Today);
  switch (todaysDayOfWeek) {
    case 1:
      Monday.setDate(todaysDayOfMonth);
      break;
    case 2:
      Monday.setDate(todaysDayOfMonth - 1);
      break;
    case 3:
      Monday.setDate(todaysDayOfMonth - 2);
      break;
    case 4:
      Monday.setDate(todaysDayOfMonth - 3);
      break;
    case 5:
      Monday.setDate(todaysDayOfMonth - 4);
      break;
    case 6:
      Monday.setDate(todaysDayOfMonth - 5);
      break;
    case 7:
      Monday.setDate(todaysDayOfMonth - 6);
      break;
    case 0:
      Monday.setDate(todaysDayOfMonth - 7);
      break;
    default:
    // alert("date error");
  }
  return Monday;
}

function findTuesday() {
  var Tuesday = new Date(Today);
  switch (todaysDayOfWeek) {
    case 1:
      Tuesday.setDate(todaysDayOfMonth + 1);
      break;
    case 2:
      Tuesday.setDate(todaysDayOfMonth);
      break;
    case 3:
      Tuesday.setDate(todaysDayOfMonth - 1);
      break;
    case 4:
      Tuesday.setDate(todaysDayOfMonth - 2);
      break;
    case 5:
      Tuesday.setDate(todaysDayOfMonth - 3);
      break;
    case 6:
      Tuesday.setDate(todaysDayOfMonth - 4);
      break;
    case 7:
      Tuesday.setDate(todaysDayOfMonth - 5);
      break;
    case 0:
      Tuesday.setDate(todaysDayOfMonth - 6);
      break;
    default:
    // alert("date error");
  }
  return Tuesday;
}

function findWednesday() {
  var Wednesday = new Date(Today);
  switch (todaysDayOfWeek) {
    case 1:
      Wednesday.setDate(todaysDayOfMonth + 2);
      break;
    case 2:
      Wednesday.setDate(todaysDayOfMonth + 1);
      break;
    case 3:
      Wednesday.setDate(todaysDayOfMonth);
      break;
    case 4:
      Wednesday.setDate(todaysDayOfMonth - 1);
      break;
    case 5:
      Wednesday.setDate(todaysDayOfMonth - 2);
      break;
    case 6:
      Wednesday.setDate(todaysDayOfMonth - 3);
      break;
    case 7:
      Wednesday.setDate(todaysDayOfMonth - 4);
      break;
    case 0:
      Wednesday.setDate(todaysDayOfMonth - 5);
      break;
    default:
    // alert("date error");
  }
  return Wednesday;
}

function findThursday() {
  var Thursday = new Date(Today);
  switch (todaysDayOfWeek) {
    case 1:
      Thursday.setDate(todaysDayOfMonth + 3);
      break;
    case 2:
      Thursday.setDate(todaysDayOfMonth + 2);
      break;
    case 3:
      Thursday.setDate(todaysDayOfMonth + 1);
      break;
    case 4:
      Thursday.setDate(todaysDayOfMonth);
      break;
    case 5:
      Thursday.setDate(todaysDayOfMonth - 1);
      break;
    case 6:
      Thursday.setDate(todaysDayOfMonth - 2);
      break;
    case 7:
      Thursday.setDate(todaysDayOfMonth - 3);
      break;
    case 0:
      Thursday.setDate(todaysDayOfMonth - 4);
      break;
    default:
    // alert("date error");
  }
  return Thursday;
}

function findFriday() {
  var Friday = new Date(Today);
  switch (todaysDayOfWeek) {
    case 1:
      Friday.setDate(todaysDayOfMonth + 4);
      break;
    case 2:
      Friday.setDate(todaysDayOfMonth + 3);
      break;
    case 3:
      Friday.setDate(todaysDayOfMonth + 2);
      break;
    case 4:
      Friday.setDate(todaysDayOfMonth + 1);
      break;
    case 5:
      Friday.setDate(todaysDayOfMonth);
      break;
    case 6:
      Friday.setDate(todaysDayOfMonth - 1);
      break;
    case 7:
      Friday.setDate(todaysDayOfMonth - 2);
      break;
    case 0:
      Friday.setDate(todaysDayOfMonth - 3);
      break;
    default:
    // alert("date error");
  }
  return Friday;
}

const thisMonday = findMonday();
// console.log('Monday is: ' + thisMonday);

const thisTuesday = findTuesday();
// console.log('Tuesday is: ' + thisTuesday);

const thisWednesday = findWednesday();
// console.log('Wednesday is: ' + thisWednesday);

const thisThursday = findThursday();
// console.log('Thursday is: ' + thisThursday);

const thisFriday = findFriday();
// console.log('Friday is: ' + thisFriday);

const holidays = [
  [7, 4], // 4th of July
  [10, 31], // Halloween
];

function calculateWeekDays() {
  var total = 0;
  var done = 0;
  for (var day = 1; day <= 31; day++) {
    var t = new Date(currentYear, currentMonth, day);
    if (t.getMonth() > currentMonth) break; // month has less than 31 days
    if (t.getDay() == 0 || t.getDay() == 6) continue; // no weekday
    if (holidays.some((h) => h[0] - 1 === currentMonth && h[1] === day))
      continue; // holiday
    total++; // increase total
    if (t.getDate() <= todaysDayOfMonth) done++; // increase past days
  }
  return [done, total];
}

function setDateTimeStart(day) {
  day = new Date(day);
  day.setHours(0);
  day.setMinutes(0);
  day.setSeconds(0);
  return day;
}

function setDateTimeEnd(day) {
  day = new Date(day);
  day.setHours(23);
  day.setMinutes(59);
  day.setSeconds(59);
  return day;
}

function getMonthFirstDay(day) {
  day = new Date(setDateTimeStart(day));
  day.setDate(1);
  return day;
}

function getMonthLastDay(day) {
  day = new Date(setDateTimeEnd(day));
  day.setMonth(currentMonth + 1);
  day.setDate(0);
  return day;
}

function formatTime(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

function formatMonth(date) {
  if (date > 3 && date < 21) return "th";
  switch (date % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

function findWeekDay(date) {
  switch (date.getDay()) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
}

export {
  Today,
  todaysDate,
  todaysDayOfMonth,
  todaysDayOfWeek,
  currentYear,
  currentMonth,
  currentDisplayMonth,
  thisMonday,
  thisTuesday,
  thisWednesday,
  thisThursday,
  thisFriday,
  calculateWeekDays,
  setDateTimeStart,
  setDateTimeEnd,
  getMonthFirstDay,
  getMonthLastDay,
  formatTime,
  formatMonth,
  findWeekDay,
};
