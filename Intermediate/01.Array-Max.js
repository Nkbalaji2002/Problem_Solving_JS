// Write the function to find the maximum element in an array

const Array_Max = (my_arr) => {
  let max_value = my_arr[0]; // initialize the value

  // iterating through each element
  for (let i = 1; i < my_arr.length; i++) {
    if (my_arr[i] > max_value) {
      max_value = my_arr[i]; // update the maximum value
    }
  }

  return max_value; // return the maximum value
};

const myarray_1 = [1, 5, 3, 9, 2];
let result = Array_Max(myarray_1);
console.log(result);
