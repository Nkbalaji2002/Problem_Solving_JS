let arr = [-5, 2, 10, 4, 6];

const Linear = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log(Linear(arr, 10));
console.log(Linear(arr, 6));
console.log(Linear(arr, 20));
