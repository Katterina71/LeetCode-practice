// ##8
/**Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

The algorithm for myAtoi(string s) is as follows:

Whitespace: Ignore any leading whitespace (" ").
Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity is neither present.
Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
Return the integer as the final result.

 */

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    
// Constants for the 32-bit signed integer range
const INT_MAX = 2147483647;
const INT_MIN = -2147483648;

// Step 1: Trim leading whitespace
let i = 0;
while (i < s.length && s[i] === ' ') {
    i++;
}

// Step 2: Check for sign
let sign = 1;
if (i < s.length && (s[i] === '-' || s[i] === '+')) {
    if (s[i] === '-') {
        sign = -1;
    }
    i++;
}

// Step 3: Read digits and form the number
let num = 0;
while (i < s.length && s[i] >= '0' && s[i] <= '9') {
    num = num * 10 + (s[i] - '0');
    i++;
}

// Apply the sign
num = num * sign;

// Step 4: Clamp the number to the 32-bit signed integer range
if (num < INT_MIN) {
    return INT_MIN;
}
if (num > INT_MAX) {
    return INT_MAX;
}

return num;
};

// Example usage:
console.log(myAtoi("42")); // Output: 42
console.log(myAtoi("   -42")); // Output: -42
console.log(myAtoi("4193 with words")); // Output: 4193
console.log(myAtoi("words and 987")); // Output: 0
console.log(myAtoi("-91283472332")); // Output: -2147483648
console.log(myAtoi("91283472332")); // Output: 2147483647