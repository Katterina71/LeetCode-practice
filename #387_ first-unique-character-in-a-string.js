// ##387
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

    //Long time
//    let sArray = s.split('')
//    for (let i=0; i<sArray.length; i++) {
//     let filter = sArray.filter(char => char === sArray[i]);
//         if (filter.length === 1) {
//             return i
//         }
//    }
//    return -1

    //Optimization time
    let charCount = {};
    
    // Count the frequency of each character
    for (let i = 0; i < s.length; i++) {
        charCount[s[i]] = (charCount[s[i]] || 0) + 1;
    }
    
    // Find the first unique character
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            return i;
        }
    }
    
    return -1;
};

const s1 = "leetcode"
console.log(firstUniqChar(s1))// Output: 0

const s2 = "loveleetcode"
console.log(firstUniqChar(s2))// Output: 2

const s3 = "aabb"
console.log(firstUniqChar(s3))// Output: -1