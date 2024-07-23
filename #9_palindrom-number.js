/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString();
    return str === str.split('').reverse().join('');
}

let x = 100
console.log(isPalindrome(x))