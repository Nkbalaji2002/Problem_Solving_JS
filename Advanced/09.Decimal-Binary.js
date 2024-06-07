// Write a function to convert a decimal number to binary
const Decimal_Binary = (decimal) => {
  // Base case, if decimal is 0, return "0"
  if (decimal === 0) {
    return "0";
  }

  // Recursive case, build the binary string from the remainders
  const Convert = (decimal) => {
    if (decimal === 0) {
      return "";
    }

    let remainder = decimal % 2;
    let quotient = Math.floor(decimal / 2);

    return Convert(quotient) + remainder.toString();
  };

  return Convert(decimal);
};

let decimal_Number = 10;

// decimal_Number = 17;

let result = Decimal_Binary(decimal_Number);
console.log(`Binary Representation of ${decimal_Number} is ${result}`);
