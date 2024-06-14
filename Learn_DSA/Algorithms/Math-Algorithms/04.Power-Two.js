const isPowerofTwo = (n) => {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }

    n = n / 2;
  }

  return true;
};

const isPowerofTwoBitwise = (n) => {
  if (n < 1) {
    return false;
  }

  let result = n & (n - 1);
  return result === 0;
};

// console.log(isPowerofTwo(1));
// console.log(isPowerofTwo(2));
// console.log(isPowerofTwo(5));
// console.log(isPowerofTwo(10));

console.log(isPowerofTwoBitwise(1));
console.log(isPowerofTwoBitwise(4));
console.log(isPowerofTwoBitwise(5));
console.log(isPowerofTwoBitwise(10));
