// Write the function to reverse a string

const reverse_String = (my_str) => {
  let reverse_Str = "";

  for (let i = my_str.length - 1; i >= 0; i--) {
    reverse_Str += my_str[i];
  }

  console.log(reverse_Str);
};

let my_str = "Hello, World!";
reverse_String(my_str);

// write the function to reverse a string for each word

const reverse_words = (my_str) => {
  const words = my_str.split(" "); // split the string into words

  let reversedWords = words.map((word) => word.split("").reverse().join("")); // reverse the each word

  return reversedWords.join(" "); //   join the reversed words together
};

const inputString = "Hello World";
let result = reverse_words(inputString);
console.log(result);
