// Add two numbers
let l1 = [2, 4, 3];
let l2 = [5, 6, 4];
let result;

const AddTwoNumbers = (l1, l2) => {
  result = [];

  for (let i = 0; i < l1.length; i++) {
    for (let j = 0; j < l2.length; j++) {
      result = l1[i] + l2[j];

      if (result) {
      }
    }
  }
};

result = AddTwoNumbers(l1, l2);
console.log(result);
