const FactorialRecursive = (n) => {
  if (n === 0) {
    return 1;
  }

  let result = n * FactorialRecursive(n - 1);
  return result;
};

console.log(FactorialRecursive(0));
console.log(FactorialRecursive(1));
console.log(FactorialRecursive(5));
