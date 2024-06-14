const TransposeMatrix = (matrix) => {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let transposed = [];

  for (let i = 0; i < cols; i++) {
    transposed[i] = [];

    for (let j = 0; j < rows; j++) {
      transposed[i][j] = matrix[j][i];
    }
  }

  return transposed;
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(TransposeMatrix(matrix));
