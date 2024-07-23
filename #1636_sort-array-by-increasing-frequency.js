//##1636
// Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.
// Return the sorted array.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let frequencyObj = {} // The keys are the elements, and the values are their frequencies.

    // Count the frequency of each element
    nums.forEach(num => {
        frequencyObj[num] = (frequencyObj[num] || 0) +1
    })

    // Sort the array based on frequency and value 
    nums.sort((a,b) => {
        let frequencyA = frequencyObj[a]
        let frequencyB = frequencyObj[b]
        if (frequencyA === frequencyB) {
            return b - a // If frequencies are the same, sort by value in descending order
        }
        return frequencyA - frequencyB // Otherwise, sort by frequencies in ascending order
    })
    
    return nums
    
};

const nums = [-1,1,-6,4,5,-6,1,4,1]
console.log(frequencySort(nums))