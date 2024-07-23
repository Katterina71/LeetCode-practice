//##350
//Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let comparingArray = []
    let comparedArray = []

    let repeatValue = []

   if (nums1.length <= nums2.length) {
        comparingArray = nums1
        comparedArray = nums2
   }   else {
       comparingArray = nums2
       comparedArray = nums1
   }

   for (let i=0; i<comparingArray.length; i++){
     for (let j=0; j<comparedArray.length; j++){
        if (comparingArray[i] === comparedArray[j]){
            repeatValue.push(comparingArray[i]);
            comparedArray.splice(j,1);
            break;
        }
     }
   }
    return repeatValue
};

const nums11 = [1,2,2,1]
const nums12 = [2,2]
console.log(intersect(nums11, nums12)) // Output: [2,2]



const nums21 = [4,9,5]
const nums22 = [9,4,9,8,4]
console.log(intersect(nums21, nums22)) // Output: [4,9]  Explanation: [9,4] is also accepted.

const nums31 = [61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81]
const nums32 = [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48]
console.log(intersect(nums31, nums32)) // [5,4,57,79,7,89,88,45,34,92,38,85,6,0,77,44,61]