// Write a function to sort an arrray in ascending order
let SortArray = (my_arr) => {
  return my_arr.sort((a, b) => a - b);
};

let my_array = [1, 2, 5, 67, 32, 64, 98, 21];

let result = SortArray(my_array);
console.log(result);
