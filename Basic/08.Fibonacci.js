// Write a function to print the first n numbers in the Fibonnacci Sequence

const Fibonnacci = (num) => {
  let my_arr = [0, 1]; // initialize array

  // generate the array
  for (let i = 2; i < num; i++) {
    my_arr.push(my_arr[i - 1] + my_arr[i - 2]);
  }

  return my_arr; // return the array
};

let number = 7;
let result = Fibonnacci(number);
console.log(`output :-`, result);
