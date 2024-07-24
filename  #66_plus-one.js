// ## 66
/* 
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits.
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // Start from the last digit and work backwards
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits; // No need to continue if there's no carry
        }
        // Set the current digit to 0 as it overflows
        digits[i] = 0;
    }
    
    // If we're here, it means all digits were 9 and we have an extra carry
    digits.unshift(1); // method adds new elements to the beginning of an array.
    return digits;
};


const digits1 = [1,2,3]
console.log(plusOne(digits1)) // Output: [1,2,4]
/* Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4]. */

const digits2 = [4,3,2,1]
console.log(plusOne(digits2)) //Output: [4,3,2,2]

const digits3 = [9]
console.log(plusOne(digits3)) //Output: [1,0]

const digits4 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
console.log(plusOne(digits4)) //Output: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]

const digits5 = [6,1,9]
console.log(plusOne(digits5)) //Output: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]