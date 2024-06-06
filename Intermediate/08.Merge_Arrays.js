// Write a function to merge two arrays
const MergeArray = (my_arr_1, my_arr_2) => {
  return [...my_arr_1, ...my_arr_2];
};

let arr_1 = [1, 2, 3];
let arr_2 = [4, 5, 6];

let result = MergeArray(arr_1, arr_2);
console.log(result);
