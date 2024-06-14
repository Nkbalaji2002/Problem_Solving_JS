const ArmstrongNumber = (n) => {
  let strN = n.toString();
  let numDigits = strN.length;

  let sum = 0;
  for (const digit of strN) {
    sum += Math.pow(parseInt(digit), numDigits);
  }

  return sum === n;
};

console.log(ArmstrongNumber(153));
