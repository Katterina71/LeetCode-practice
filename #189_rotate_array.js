// ##189
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n; // Adjust k to be within the bounds of the array length

    while (k > 0) {
        let lastElement = nums[n - 1];
        for (let i=n-1; i>0; i--) {
            nums[i] = nums[i - 1];
        }
        nums[0] = lastElement;
        k--
    }
    return nums
    
};

//not good for long array
const nums1 = [-1,-100,3,99]
const k1 = 2

console.log(rotate(nums1,k1))

const nums2 = [1,2,3,4,5,6,7]
const k2 = 3

console.log(rotate(nums2,k2))

// Second solution

var rotate = function(nums, k) {
    k = k % nums.length;  // In case k is larger than the array length
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};

function reverse(nums, start, end) {
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

// Example usage:
const nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 3);
console.log(nums);  // Output: [5, 6, 7, 1, 2, 3, 4]