// Write the function to find the sum of digits of number
const sumDigits = (my_input) => {
  let sum = 0;

  let num_Str = my_input.toString();

  for (let i = 0; i < num_Str.length; i++) {
    sum += parseInt(num_Str[i]);
  }

  return sum;
};

let my_input = 1234;
let result = sumDigits(my_input);
console.log(result);

my_input = 567;
result = sumDigits(my_input);
console.log(result);
