// Add two sum numbers

let nums, target, result;

const twoSum = (nums, target) => {
  let result;
  let map = new Map();

  //   Method 2
  for (let i = 0; i < nums.length; i++) {
    result = target - nums[i];

    if (map.has(result)) {
      return [map.get(result), i];
    }

    map.set(nums[i], i);
  }

  // Method 1
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       result = nums[i] + nums[j];

  //       if (result === target) {
  //         return [i, j];
  //       }
  //     }
  //   }
};

// example 1
nums = [2, 7, 11, 15];
target = 9;
result = twoSum(nums, target);
console.log(result);

// Example 2
nums = [3, 2, 4];
target = 6;
result = twoSum(nums, target);
console.log(result);

// Example 3
nums = [3, 3];
target = 6;
result = twoSum(nums, target);
console.log(result);
