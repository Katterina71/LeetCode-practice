// ##26
//Remove Duplicates from Sorted Array
/** Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k. */


/**
 * @param {number[]} nums
 * @return {number}
 */



var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let uniqueIndex = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[uniqueIndex]) {
            uniqueIndex++;
            nums[uniqueIndex] = nums[i];
        }
        console.log(uniqueIndex)
        console.log(nums)
    }
    
    // The number of unique elements
    return uniqueIndex + 1;
};

let nums = [0,0,1,1,1,2,2,3,3,4]
let k = removeDuplicates(nums);
console.log(nums.slice(0, k)); 
console.log(removeDuplicates(nums))