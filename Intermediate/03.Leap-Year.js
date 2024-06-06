// Write the function to check if a year is a leap year
const Leap_Year = (year) => {
  if (year % 400 === 0) {
    console.log(`${year} is divisble by 400`);
  } else if (year % 100 === 0 && year % 400 !== 0) {
    console.log(`${year} is divisible by 100 but not divisible by 400`);
  } else if (year % 4 === 0 && year % 100 !== 0) {
    console.log(`${year} is divisible by 4 but not divisible by 100`);
  } else {
    console.log(`${year} is not a Leap Year`);
  }
};

Leap_Year(2000);
Leap_Year(1900);
Leap_Year(2024);
