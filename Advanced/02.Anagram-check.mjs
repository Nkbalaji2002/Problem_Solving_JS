// Write the function to check if two strings are anagrams.

const checkAnagrams = (a, b) => {
  // check the length equal or not
  if (a.length !== b.length) {
    return false;
  }

  // sort the strings alphabetically
  const sorted_str_1 = a.split("").sort().join("");
  const sorted_str_2 = b.split("").sort().join("");

  // compare the sorted string
  return sorted_str_1 === sorted_str_2;
};

let a = "listen";
let b = "silent";

a = "Hello";
b = "World";

let result = checkAnagrams(a, b);

console.log(result);
