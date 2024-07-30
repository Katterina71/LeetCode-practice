// 206
/** Given the head of a singly linked list, reverse the list, and return the reversed list. */

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let next = current.next; // Store next node
        current.next = prev; // Reverse current node's pointer
        prev = current; // Move prev one step forward
        current = next; // Move current one step forward
    }

    return prev; // New head of the reversed list
};

// Helper function to convert array to linked list
function arrayToList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert linked list to array
function listToArray(head) {
    let arr = [];
    let current = head;
    while (current !== null) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}

// Example usage:
const head = arrayToList([1, 2, 3, 4, 5]);
const reversedHead = reverseList(head);
console.log(listToArray(reversedHead)); // Output: [5, 4, 3, 2, 1]
