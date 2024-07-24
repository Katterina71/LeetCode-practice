// ## 2191
/*You are given a 0-indexed integer array mapping which represents the mapping rule of a shuffled decimal system. mapping[i] = j means digit i should be mapped to digit j in this system.

The mapped value of an integer is the new integer obtained by replacing each occurrence of digit i in the integer with mapping[i] for all 0 <= i <= 9.

You are also given another integer array nums. Return the array nums sorted in non-decreasing order based on the mapped values of its elements.

Notes:

Elements with the same mapped values should appear in the same relative order as in the input.
The elements of nums should only be sorted based on their mapped values and not be replaced by them. */


//SOLUTION

/** 
1. Create a function to convert each number in nums based on the mapping.
2. Use this function to sort nums based on the mapped values while maintaining their relative order when mapped values are the same.
3.Return the sorted array.
*/

var sortJumbled = function(mapping, nums) {
    // Helper function to convert a number based on the mapping
    //Converts the number to a string to iterate through each digit, replaces each digit using the mapping array, and then converts the result back to an integer.
    const getMappedValue = (num) => {
        let str = num.toString();
        let mappedStr = '';
        for (let char of str) {
            mappedStr += mapping[parseInt(char)]; // The parseInt function converts a string to an integer. 
        }
        return parseInt(mappedStr);
    };

    // Create an array of objects to store the original numbers and their mapped values
    let mappedNums = nums.map(num => ({ original: num, mapped: getMappedValue(num) }));

    // Sort the array based on the mapped values, maintaining relative order for equal mapped values
    mappedNums.sort((a, b) => a.mapped - b.mapped);

    // Extract the original numbers in the sorted order
    return mappedNums.map(item => item.original);
};

// Example usage:
const mapping = [8, 1, 7, 2, 3, 9, 0, 6, 4, 5];
const nums = [990, 332, 981];
console.log(sortJumbled(mapping, nums)); // Output: [981, 990, 332]

/**
 The mapping array indicates how each digit (0 through 9) should be transformed:

0 -> 8
1 -> 9
2 -> 4
3 -> 0
4 -> 2
5 -> 1
6 -> 3
7 -> 5
8 -> 7
9 -> 6
Here’s how each number in nums is mapped:

Mapping 991:

Digit 9 maps to 6
Digit 1 maps to 9
Therefore, 991 becomes 669
 */

const mapping2 = [0,1,2,3,4,5,6,7,8,9];
const nums2 = [9, 8, 7, 6, 5];
console.log(sortJumbled(mapping2, nums2)); // Output: [5, 6, 7, 8, 9]