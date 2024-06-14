let my_arr = [-5, 2, 4, 6, 10];

const recursiveBinary = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  return BinarySearch(left, right, arr, target);
};

const BinarySearch = (left, right, arr, target) => {
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (target === arr[middle]) {
      return middle;
    }

    if (target < arr[middle]) {
      return BinarySearch(left, right - 1, arr, target);
    } else {
      return BinarySearch(left + 1, right, arr, target);
    }
  }

  return -1;
};

console.log(recursiveBinary(my_arr, 10));
console.log(recursiveBinary(my_arr, 6));
console.log(recursiveBinary(my_arr, 20));
