/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0]
    for (let i = 1; i < strs.length; i++) {
        //indexOf method returns the position of the first occurrence of a value in a string.
    while (strs[i].indexOf(prefix) !== 0) {
        //substring method extracts characters, between two indices (positions), from a string, and returns the substring.
        prefix = prefix.substring(0, prefix.length - 1);
        // If the prefix becomes empty, return an empty string
        if (prefix === "") return "";
    }}
return prefix;
    
};

const strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs))