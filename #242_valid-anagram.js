// ##242
/**Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sModify = s.split('').sort().join('')
    let tModify = t.split('').sort().join('')
    return sModify === tModify;
};


const s1 = "anagram"
const t1 = "nagaram"
console.log(isAnagram(s1,t1))// Output: true

const s2 = "rat"
const t2 = "car"
console.log(isAnagram(s2,t2))// Output: false