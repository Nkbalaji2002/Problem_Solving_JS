// Write the function to find the factorial of a number

const Factorial = (n) => {
  // Base Case
  if (n === 1 || n === 0) {
    return n;
  }

  // Recursive Case
  else {
    return n * Factorial(n - 1);
  }
};

let number = 5;
let result = Factorial(number);
console.log(`The Factorial of ${number} is ${result}`);
