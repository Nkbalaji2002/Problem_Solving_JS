// Write a function to count the number of vowels in the string
const Count_Vowels = (my_str) => {
  let count = 0;
  let my_vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  for (let i = 0; i < my_str.length; i++) {
    if (my_vowels.includes(my_str[i])) {
      count++;
    }
  }

  return count;
};

let my_str = "Hello, World";
let result = Count_Vowels(my_str);
console.log(`${result} count of vowels in ${my_str}`);

my_str = "OpenAI";
result = Count_Vowels(my_str);
console.log(`${result} count of vowels in ${my_str}`);
