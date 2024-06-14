const SumofDigits = (n) => {
  let sum = 0;

  while (n != 0) {
    let remainder = n % 10;
    sum = sum + remainder;
    n = Math.floor(n / 10);
  }

  return sum;
};

let result = SumofDigits(123);
console.log(result);
