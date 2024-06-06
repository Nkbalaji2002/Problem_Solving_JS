// Write a function to find the second largest number in an array
const SecondLargeNum = (my_arr) => {
  if (my_arr.length < 2) {
    return "Array must contain at least two elements";
  }

  let first = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < my_arr.length; i++) {
    if (my_arr[i] > first) {
      second = first;
      first = my_arr[i];
    } else if (my_arr[i] > second && my_arr[i] !== first) {
      second = my_arr[i];
    }
  }

  return second === -Infinity ? "No Second Largest Number Found" : second;
};

let my_array = [5, 10, 7];
let result = SecondLargeNum(my_array);
console.log(result);

my_array = [2, 1, 4, 1, 5, 4];
result = SecondLargeNum(my_array);
console.log(result);
