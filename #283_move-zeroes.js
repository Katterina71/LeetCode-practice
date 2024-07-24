// ##283
/** 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonZeroIndex = 0;

    // Move all non-zero elements to the beginning of the array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }

    // Fill the remaining positions with zeros
    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums
};

const nums1 = [0,1,0,3,12]
console.log(moveZeroes(nums1))// Output: [1,3,12,0,0]

const nums2 = [0]
console.log(moveZeroes(nums2)) // [0]

const nums3 = [0,1,0]
console.log(moveZeroes(nums3)) // [1,0,0]