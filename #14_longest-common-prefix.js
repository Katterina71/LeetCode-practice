/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

    // Start with the first string as the prefix
    let prefix = strs[0];

    // Compare the prefix with each string in the array
    for (let i = 1; i < strs.length; i++) {
        // Adjust the prefix until it matches the beginning of the current string
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            // If the prefix becomes empty, return an empty string
            if (prefix === "") return "";
        }
    }

    return prefix;
};

// Example usage:
let strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));  // Output: "fl"

strs = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs));  // Output: ""
