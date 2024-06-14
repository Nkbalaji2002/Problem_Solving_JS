const Factorial = (n) => {
  let result;
  if (n === 1) {
    return 1;
  } else {
    result = n * Factorial(n - 1);
  }

  return result;
};

console.log(Factorial(5));
