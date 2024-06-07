// Write the function to convert a binary number to decimal
const BinaryNumber = (my_binary) => {
  let decimal = 0; // initialize the decimal sum

  // iterate through binary digits
  for (let i = 0; i < my_binary.length; i++) {
    decimal += parseInt(my_binary[i]) * Math.pow(2, my_binary.length - 1 - i); // calculate decimal value
  }

  return decimal;
};

let my_binary = "1010";
let result = BinaryNumber(my_binary);
console.log(`Decimal representation of ${my_binary} is ${result}`);
