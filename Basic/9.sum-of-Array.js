// Write a function to find the sum of all elements in an array

const SumArray = (my_arr) => {
  let result = 0; // initialize the variable

  //   iterate through each element in array
  for (let i = 0; i < my_arr.length; i++) {
    result += my_arr[i]; // add each element to sum
  }

  return result; //   after iterating throught the all elements then return the sum
};

let my_array = [1, 2, 3, 4, 5];
let my_result = SumArray(my_array);

console.log(`my_result : ${my_result}`);
