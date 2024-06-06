// Write the function to check if a string is a polindrome

const CheckPolindrome = (str) => {
  const Normalize_Str = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // Normalization convert the lowercase and remove the non-alphanumeric characters

  const reversedStr = Normalize_Str.split("").reverse().join(""); // reverse the normalized stirng

  return Normalize_Str === reversedStr; // compare these two variables
};

let my_str = "A man, a plan a canal, Panama";

my_str = "Nivin";

let result = CheckPolindrome(my_str);

if (result) {
  console.log(`The string "${my_str}" is a Polindrome`);
} else {
  console.log(`The string "${my_str}" is not a Polindrome`);
}
