// write a function to multiply two matrices
const Matrix_Multi = (a, b) => {
  // initialize the rows and cols based on matrix_a length
  const rows = a.length;
  const cols = a[0].length;

  //   initialize the result_matrix
  let resultMatrix = new Array(rows)
    .fill(null)
    .map(() => new Array(cols).fill(0));

  // iterate the each element and multiply elements from both matrices
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      resultMatrix[i][j] = a[i][j] * b[i][j];
    }
  }

  return resultMatrix;
};

let a = [
  [1, 2, 3],
  [4, 5, 6],
];

let b = [
  [7, 8, 9],
  [10, 11, 12],
];

let result = Matrix_Multi(a, b);
console.log(result);
