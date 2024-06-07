// Write the function to implement binary search on a sorted array
const binarySearch = (myarr, target) => {
  let left = 0;
  let right = myarr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (myarr[mid] === target) {
      return mid;
    } else if (myarr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // target not found
};

let my_array = [1, 3, 5, 7, 9, 11];
let target = 7;

my_array = [3, 4, 5, 7, 4];
let result = binarySearch(my_array, target);

if (result !== -1) {
  console.log(`Element found at index : ${result}`);
} else {
  console.log(`Element not found in the array.`);
}
