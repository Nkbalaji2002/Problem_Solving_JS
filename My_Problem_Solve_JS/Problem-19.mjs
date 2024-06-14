const MatrixMultiplication = (a, b) => {
  let rows = a.length;
  let cols = a[0].length;

  let sumArray = new Array(rows).fill(null).map(() => new Array(cols).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      sumArray[i][j] = a[i][j] * b[i][j];
    }
  }

  return sumArray;
};

let a = [
  [1, 2],
  [3, 4],
];
let b = [
  [5, 6],
  [7, 8],
];

console.log(MatrixMultiplication(a, b));
