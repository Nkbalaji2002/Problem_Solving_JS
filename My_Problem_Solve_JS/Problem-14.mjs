const LargestNumber = (a, b, c) => {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
};

let result = LargestNumber(6, 9, 3);
console.log(result);
