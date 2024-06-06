// Write a function to find the largest of two numbers
const LargestNumber = (a, b) => {
  const max_result = Math.max(a, b);
  return max_result;
};

let final_result = LargestNumber(20, 34);

final_result = LargestNumber(-43, 1);

console.log(`${final_result} is the Largest Number`);
