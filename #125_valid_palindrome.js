// ##125
/**A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise. */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Regular expression to match non-alphanumeric characters
    const pattern = /[^a-zA-Z0-9]+/g;
     // Remove unwanted characters and convert to lowercase
    let result = s.toLowerCase().replace(pattern, '');
    let n = result.length - 1;
    let i = 0;

    while (i < n) {
        if (result[i] !== result[n]) {
            return false;
        }
        i++;
        n--;
    }
    return true;
};

const s1 = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s1))// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.


const s2 = "race a car"
console.log(isPalindrome(s2))
// Output: false
// Explanation: "raceacar" is not a palindrome.

const s3 = " "
console.log(isPalindrome(s3))
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

const s4= 'ab@a' 
console.log(isPalindrome(s4)) // Output: true

const s5= '0P' 
console.log(isPalindrome(s5)) // Output: false