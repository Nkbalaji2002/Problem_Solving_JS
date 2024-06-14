const isPolindrome = (my_str) => {
  // let normal_str = "";
  let reversed_arr = my_str.split("").reverse().join("");

  return reversed_arr === my_str;
};

let result = isPolindrome("racecar");
result = isPolindrome("race");
console.log(result);
