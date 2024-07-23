// ## 21
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

var mergeTwoLists = function(list1, list2) {
    // Create a dummy node to act as the start of the merged list
    let dummy = new ListNode(-1);
    let current = dummy;

    // Merge the lists while there are elements in both
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // If there are remaining elements in either list, append them
    current.next = list1 !== null ? list1 : list2;

    // Return the merged list, which starts after the dummy node
    return dummy.next;
};

// Example usage:
const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

let mergedList = mergeTwoLists(list1, list2);

// Function to print the linked list
function printList(head) {
    let current = head;
    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
}

// Print the merged list
printList(mergedList);


/*

Explanation:
ListNode Definition: Define the ListNode class to represent each node in the linked list.
Dummy Node: Create a dummy node to simplify handling edge cases and use a pointer current to build the new list.
Merge Logic: Use a while loop to iterate through both lists, comparing the current nodes and appending the smaller one to the new list.
Append Remaining Nodes: Once one of the lists is exhausted, append the remaining nodes from the other list.
Return the Result: The merged list starts from the node next to the dummy node.

 */