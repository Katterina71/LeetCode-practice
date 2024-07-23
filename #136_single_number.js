// #136 Single Number
//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function(nums) {
    let single = 0;
    for (let num of nums) {
        // This means that when you XOR bitwise operator all the numbers in the array together, the duplicate numbers will cancel out, leaving only the single number.
        single ^= num;
    }
    return single;
};

const nums1 = [2,2,1]
console.log(singleNumber(nums1)) // Output: 1

const nums2 = [4,1,2,1,2]
console.log(singleNumber(nums2)) // Output: 4

const nums3 = [1]
console.log(singleNumber(nums3)) // Output: 1

console.log(2^12)