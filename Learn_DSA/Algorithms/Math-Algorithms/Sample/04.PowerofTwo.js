const PowerofTwo = (n) => {
  if (n < 2) {
    return true;
  }

  //   while (n > 2) {
  //     if (n % 2 !== 0) {
  //       return false;
  //     }

  //     n = n / 2;
  //   }

  for (let i = 2; i < n; n = n / i) {
    if (n % i !== 0) {
      return false;
    }
  }

  return true;
};

console.log(PowerofTwo(16));
console.log(PowerofTwo(18));
console.log(PowerofTwo(1));
