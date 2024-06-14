const Fibonacci = (n) => {
  if (n < 2) {
    return n;
  }

  let my_arr = [0, 1];
  let result = null;

  for (let i = 2; i <= n; i++) {
    my_arr[i] = my_arr[i - 1] + my_arr[i - 2];
    result = my_arr[i];
  }

  return result;
};

console.log(Fibonacci(0));
console.log(Fibonacci(6));
console.log(Fibonacci(7));
