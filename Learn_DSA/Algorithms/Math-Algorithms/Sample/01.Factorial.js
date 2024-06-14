const Factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }

  let result = n * Factorial(n - 1);
  return result;
};

console.log(Factorial(5));
console.log(Factorial(0));
console.log(Factorial(10));
