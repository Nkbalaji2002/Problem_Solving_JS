// write a function to add two matrices
const Matrix_Add = (a, b) => {
  //   get the number of rows and columns in matrix A
  const rows = a.length;
  const cols = a[0].length;

  //   initialize the result
  let resultMatrix = new Array(rows)
    .fill(null)
    .map(() => new Array(cols).fill(0));

  // iterate over each element and add elements from both matrices
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      resultMatrix[i][j] = a[i][j] + b[i][j];
    }
  }

  return resultMatrix;
};

let maxtrix_1 = [
  [1, 2, 3],
  [4, 5, 6],
];
let maxtrix_2 = [
  [7, 8, 9],
  [10, 11, 12],
];

let result = Matrix_Add(maxtrix_1, maxtrix_2);
console.log(result);
