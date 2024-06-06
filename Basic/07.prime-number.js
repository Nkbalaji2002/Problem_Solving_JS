// Write a function to check if a number is prime

const check_Prime_Number = (num) => {
  // check if num is less than 2
  if (num < 2) {
    return false;
  }

  // check for divisibility by 2
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }

  // Iteate through possible divisors
  for (let i = 3; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // not prime number
    }
  }
  return true; // prime number
};

let testNumber = 163;
let result = check_Prime_Number(testNumber);

if (result) {
  console.log(`${testNumber} is a prime Number`);
} else {
  console.log(`${testNumber} is not a prime Number`);
}

// print the 1 to 100 find the prime number

for (let i = 1; i <= 100; i++) {
  if (check_Prime_Number(i)) {
    console.log(`i : ${i}`);
  }
}
