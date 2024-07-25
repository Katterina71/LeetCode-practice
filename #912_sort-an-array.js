// ##912
/*Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible. */

/**The function takes two arguments a and b (representing two elements in the array) and returns a numerical value based on the following conditions:
If the returned value is negative (a - b < 0), a is considered less than b and comes before b in the sorted array.
If the returned value is zero (a - b === 0), a and b are considered equal in terms of ordering.
If the returned value is positive (a - b > 0), a is considered greater than b and comes after b in the sorted array.
Essentially, a - b sorts the array in ascending order. */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    nums.sort(function(a, b){return a-b});
    return nums
};

const nums1 = [5,2,3,1]
console.log(sortArray(nums1))
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).


const nums2 = [5,1,1,2,0,0]
console.log(sortArray(nums2))
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessairly unique.