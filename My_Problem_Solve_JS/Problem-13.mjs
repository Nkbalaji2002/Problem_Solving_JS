// Leap Year
const LeapYear = (year) => {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
};

let result = LeapYear(2020);
console.log(result);
