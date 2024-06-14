const BinarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (target === arr[mid]) {
      return arr[mid];
    } else if (target > arr[mid]) {
      left++;
    } else {
      right--;
    }
  }

  return -1;
};

console.log(BinarySearch([1, 3, 5, 7, 9], 5));
