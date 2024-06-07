// Write the function to find duplicate eleemnts in an array
const FindDuplicatesArray = (arr_1) => {
  let my_seen = new Set(); // initialize the set

  let my_array_dup = []; // initialize an empty array for duplicates

  // iterate through the array
  for (const eleemnt of arr_1) {
    // check if the element in the array
    if (my_seen.has(eleemnt)) {
      my_array_dup.push(eleemnt); // if it is, add it to the duplicates array
    } else {
      my_seen.add(eleemnt); // if it's not, add it to the set
    }
  }

  return my_array_dup;
};

let my_array = [1, 2, 3, 4, 2, 5, 1, 6, 3];
let result = FindDuplicatesArray(my_array);
console.log(result);
