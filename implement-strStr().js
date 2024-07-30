// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
        // Edge case: if needle is an empty string, return 0
        if (needle.length === 0) return 0;

        // Loop through each possible starting position in haystack
        for (let i = 0; i <= haystack.length - needle.length; i++) {
            // Check if the substring from this position matches needle
            if (haystack.substring(i, i + needle.length) === needle) {
                return i;
            }
        }
    
        // If no match is found, return -1
        return -1;
};

const haystack1 = "sadbutsad"
const  needle1 = "sad"
console.log(haystack1, needle1) // Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

const haystack2 = "leetcode"
const needle2 = "leeto"
console.log(haystack2, needle2)
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.