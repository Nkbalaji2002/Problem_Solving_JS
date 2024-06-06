// Write the function to find teh greatest common divisor (GCD) of two numbers
export const GCD = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    let output = GCD(b, a % b);
    return output;
  }
};

// let result = GCD(48, 18);
// console.log(result);

// result = GCD(10, 4);
// console.log(result);
