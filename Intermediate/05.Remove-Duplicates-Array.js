// Write a function to remove duplicate element from an array
const removeDuplicate = (my_arr) => {
  let unique_elements = [];

  for (let i = 0; i < my_arr.length; i++) {
    if (!unique_elements.includes(my_arr[i])) {
      unique_elements.push(my_arr[i]);
    }
  }

  return unique_elements;
};

let my_array = [1, 2, 3, 4, 4, 5];
let result = removeDuplicate(my_array);
console.log(result);
