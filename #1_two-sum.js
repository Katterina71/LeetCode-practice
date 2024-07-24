/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


var twoSum = function(nums, target) {
    let number = []
    for (let i=0; i<nums.length; i++){
        let check = target - nums[i];
        let index = nums.findIndex(num => num === check)
        if (index !== -1 && index !== i){
            return number = [i,index]
        }
    }
};

const nums=[2,7,11,15]
const target = 9
console.log(twoSum(nums,target))

const nums2=[3,2,4]
const target2 = 6
console.log(twoSum(nums2,target2))


// Second solution 

var twoSum = function(nums, target) {

    //Initialize a Map: Create a new Map numMap to store the numbers and their indices.
    const numMap = new Map();
    debugger
       for (let i = 0; i < nums.length; i++) {
           const complement = target - nums[i];
           //The has() method returns all elements that have one or more elements inside of them, that matches the specified selector. 
           if (numMap.has(complement)) {
            // The get method returns the value associated with a specified key from the Map
               return [numMap.get(complement), i];
           }
           numMap.set(nums[i], i);
       }
   
       return [];
   };
   
   let nums3 = [2,7,11,15]
   let target3 = 9
   
   console.log(twoSum(nums3,target3))