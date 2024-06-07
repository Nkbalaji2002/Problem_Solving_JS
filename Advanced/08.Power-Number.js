// write a function to find the power of a number using recursion
const PowerNumber = (base, exponent) => {
  // Base Case
  if (exponent === 0) {
    return 1;
  }

  // recursive case: base multiplied by the power of base, exponent - 1
  const result = base * PowerNumber(base, exponent - 1);
  return result;
};

let base = 2;
let exponent = 3;

base = 4;

const result = PowerNumber(base, exponent);
console.log(`${base} ^ ${exponent} = ${result}`);
