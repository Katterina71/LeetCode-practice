// ##7
//Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).


/**STEPS:

Handle negative numbers by noting the sign and working with the absolute value.
Reverse the digits of the integer.
Check if the reversed integer falls within the 32-bit signed integer range.
Return the reversed integer or 0 if it falls outside the range.
 */

/**The 32-bit signed integer range is [−2147483648,2147483647]. */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;
    let result = 0;
    let isNegative = x < 0;
    
    x = Math.abs(x);
    
    while (x !== 0) {
        let pop = x % 10;
        x = Math.floor(x / 10);
        
        // Check for overflow
        if (result > Math.floor(INT_MAX / 10) || (result === Math.floor(INT_MAX / 10) && pop > 7)) {
            return 0;
        }
        if (result < Math.ceil(INT_MIN / 10) || (result === Math.ceil(INT_MIN / 10) && pop > 8)) {
            return 0;
        }
        
        result = result * 10 + pop;
    }
    
    return isNegative ? -result : result;
};


const x1 = 123
console.log(reverse(x1)) // Output: 321

const x2 = -123
console.log(reverse(x2)) // Output: -321

const x3 = 120
console.log(reverse(x3))// Output: 21