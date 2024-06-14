// Factorial of a number
const Factorial = (n) => {
  if (n === 0) {
    return 1;
  }

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result = result * i;
  }

  return result;
};

console.log(Factorial(0));
console.log(Factorial(4));
console.log(Factorial(5));

// Big-O = O(n)
