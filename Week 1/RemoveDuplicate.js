// Remove Duplicate 
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.

// My initial solution O(n)
var removeDuplicates = function(nums) {
    let lastAdded = nums[0];
    let position = 1;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > lastAdded) {
            lastAdded = nums[i];
            nums[position] = lastAdded;
            position++;
        }
    }
    return position;
};

