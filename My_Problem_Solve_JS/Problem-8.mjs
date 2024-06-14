const ReserveString = (my_str) => {
  //   let normal_str = "hello";
  let reversed_str = "";

  for (let i = my_str.length - 1; i >= 0; i--) {
    reversed_str += my_str[i];
  }

  return reversed_str;
};

let result = ReserveString("hello");
console.log(result);
