// Write the function to implement linear search
const LinearSearch = (myarr, target) => {
  // Iterate through each element in the array
  for (let i = 0; i < myarr.length; i++) {
    if (myarr[i] === target) {
      return i; // return the index if the target is found
    }
  }

  return -1; // return -1 if target is not found
};

let my_array = [1, 3, 5, 7, 9, 11];
let target = 7;
let result = LinearSearch(my_array, target);

if (result !== -1) {
  console.log(`Element found at index : ${result}`);
} else {
  console.log(`Element not found in the array`);
}
