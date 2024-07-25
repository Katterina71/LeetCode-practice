// #314
// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// Using the reverse method is indeed a valid approach to reverse an array of characters in JavaScript. However, the problem specifically asks for modifying the input array in-place with O(1) extra memory, and the direct usage of the reverse method might not explicitly illustrate the in-place modification, although it does achieve the desired effect.

// var reverseString = function(s) {
//   return  s.reverse()
// };

//You must do this by modifying the input array in-place with O(1) extra memory.
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Swap characters at left and right pointers
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        // Move the pointers
        left++;
        right--;
    }
};

const s1 = ["h","e","l","l","o"]
reverseString(s1);
console.log(s1) // Output: ["o","l","l","e","h"]

const s2 = ["H","a","n","n","a","h"]
reverseString(s2);
console.log(s2) // Output: ["h","a","n","n","a","H"]