// Write the function to find the maximum element in an array
const ArrayMin = (my_arr) => {
  let min_value = my_arr[0]; // iniialize the value for first element array

  // iterate through element in array
  for (let i = 0; i < my_arr.length; i++) {
    if (my_arr[i] < min_value) {
      min_value = my_arr[i]; // compare each element for minimum value
    }
  }

  return min_value;
};

let my_arr = [4, 1, 2, 8, 9];
let result = ArrayMin(my_arr);
console.log(`Array of Minimum number is ${result}`);
