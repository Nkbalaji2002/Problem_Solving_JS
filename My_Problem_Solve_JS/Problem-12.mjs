const SwapTwoNumber = (a, b) => {
  let temp;

  temp = a;
  a = b;
  b = temp;

  return `(${a},${b})`;
};

let result = SwapTwoNumber(3, 5);
console.log(result);
