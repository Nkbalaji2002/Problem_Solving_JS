const MatrixAddition = (a, b) => {
  let rows = a.length;
  let cols = a[0].length;

  let sumarray = new Array(rows).fill(null).map(() => new Array(cols).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      sumarray[i][j] = a[i][j] + b[i][j];
    }
  }

  return sumarray;
};

let arr_1 = [
  [1, 2],
  [3, 4],
];
let arr_2 = [
  [5, 6],
  [7, 8],
];
console.log(MatrixAddition(arr_1, arr_2));
