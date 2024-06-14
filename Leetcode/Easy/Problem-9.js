// Polindrome Number
let x, result;

const isPolindrome = (num) => {
  let normal_num = num.toString().split("").reverse().join("");
  let result = parseInt(normal_num);

  if (num === result) {
    return true;
  } else {
    return false;
  }
};

console.log(isPolindrome(121));
console.log(isPolindrome(-121));
console.log(isPolindrome(10));
