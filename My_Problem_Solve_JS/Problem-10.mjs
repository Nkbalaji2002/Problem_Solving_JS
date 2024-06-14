export const GCD = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return GCD(b, a % b);
  }
};

let result = GCD(12, 18);
console.log(result);
