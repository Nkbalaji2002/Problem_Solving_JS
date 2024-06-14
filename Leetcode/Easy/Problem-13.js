// Roman to Integer
let s, result;

const romanToInt = function (s) {
  const romanToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const currentVal = romanToInt[s[i]];
    const nextVal = romanToInt[s[i + 1]];

    // Compare current and next values
    if (currentVal < nextVal) {
      total -= currentVal;
    } else {
      total += currentVal;
    }
  }

  return total;
};

s = "III";
result = romanToInt(s);
console.log(result);

s = "LVIII";
result = romanToInt(s);
console.log(result);

s = "MCMXCIV";
result = romanToInt(s);
console.log(result);
