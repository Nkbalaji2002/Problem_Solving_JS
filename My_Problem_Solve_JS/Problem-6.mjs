const Fibonacci = (n) => {
  let my_arr = [0, 1],
    result;

  for (let i = 2; i < n; i++) {
    result = my_arr[i - 2] + my_arr[i - 1];
    my_arr.push(result);
  }

  return my_arr;
};

let result = Fibonacci(6);
console.log(result);
