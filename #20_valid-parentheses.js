// ## 20
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

/**
 * @param {string} s
 * @return {boolean}
 */



var isValid = function(s) {
// Use a stack to keep track of opening brackets
const stack = [];
// Create a mapping of closing brackets to their corresponding opening brackets
const bracketMap = {
    ')': '(',
    '}': '{',
    ']': '['
};

for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
        // If the character is an opening bracket, push it onto the stack
        stack.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
        // If the character is a closing bracket, check if it matches the top of the stack
        // pop() removes the last element of an array
        if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
            return false;
        }
    }
}

// If the stack is empty at the end, all brackets were matched correctly
return stack.length === 0;
};

const s = "[()]"
console.log(isValid(s))