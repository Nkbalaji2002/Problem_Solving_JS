const EvenOdd = (num) => {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

let result = EvenOdd(7);
console.log(result);
