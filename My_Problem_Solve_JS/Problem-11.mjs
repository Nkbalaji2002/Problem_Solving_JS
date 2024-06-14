import { GCD } from "./Problem-10.mjs";

const LCM = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return (a * b) / GCD(a, b);
  }
};

let result = LCM(12, 18);
console.log(result);
