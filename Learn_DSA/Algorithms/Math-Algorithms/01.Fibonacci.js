// Fibnacci sequence

const fibnacci = (n) => {
  let my_array = [0, 1];

  for (let i = 2; i < n; i++) {
    my_array[i] = my_array[i - 1] + my_array[i - 2];
  }

  return my_array;
};

console.log(fibnacci(2));
console.log(fibnacci(3));
console.log(fibnacci(7));

// Big-O Notation based on O(n) linear type
