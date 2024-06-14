// Merge two sorted lists

let result;

var mergeTwoLists = function (list1, list2) {
  result = list1;
};

result = mergeTwoLists([1, 2, 4], [1, 3, 4]);
// console.log(result);

let list1 = [1, 2, 4];
let list2 = [1, 3, 4];

result = list1.splice(2, 0, list2);
console.log(result);
