const Fib_Recursion = (n) => {
  let result, a, b;

  if (n < 2) {
    return n;
  } else {
    a = Fib_Recursion(n - 1);
    b = Fib_Recursion(n - 2);
    result = a + b;
  }

  return result;
};

console.log(Fib_Recursion(0));
console.log(Fib_Recursion(1));
console.log(Fib_Recursion(6));
