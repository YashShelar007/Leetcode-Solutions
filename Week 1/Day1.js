// Given an integer array nums, return true if any value appears at least twice
// in the array, and return false if every element is distinct.

// My solution using sort | O(N log N)
var containsDuplicate = function (nums) {
  if (nums.length === 1) {
    return false;
  }
  nums.sort();
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) {
      return true;
    }
  }

  return false;
};

// Brute Force: Naive Approach | O(N^2)
const brute = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }
  return false;
};

// Set: Optimized | O(N)
const setTwo = (nums) => {
  const set = new Set();
  for (const n of nums) {
    if (set.has(n)) return true;
    else set.add(n);
  }
  return false;
};
