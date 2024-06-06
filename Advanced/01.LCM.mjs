import { GCD } from "../Intermediate/10.GCD.mjs";

// Write a function to find the least common multiple (LCM) of two numbers
const LCM = (a, b) => {
  let compute_gcd = GCD(a, b);
  let output = (a * b) / compute_gcd;
  return output;
};

let my_result = LCM(12, 18);
console.log(my_result);

my_result = LCM(30, 33);
console.log(my_result);
