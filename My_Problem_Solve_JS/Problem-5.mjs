const PrimeNumber = (n) => {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

let result = PrimeNumber(11);
console.log(result);
