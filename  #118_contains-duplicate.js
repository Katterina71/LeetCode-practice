// ##118
//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let seen = {}; // Object to keep track of seen elements
    let n = 0
    let repeatValue = false
    let length = nums.length

    while (repeatValue === false && n < length) {
        if (seen[nums[n]] !== undefined) {
            repeatValue = true;
        } else {
            seen[nums[n]] = true;
        }
        n++;
    }
    
    return repeatValue
};

//Example 
const nums1 = [1,2,3,1]
console.log(containsDuplicate(nums1))

const nums2 = [1,2,3,4]
console.log(containsDuplicate(nums2))

const nums3 = [1,1,1,3,3,4,3,2,4,2]
console.log(containsDuplicate(nums3))