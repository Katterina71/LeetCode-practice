// 19 Remove Nth Node From End of List
// Given the head of a linked list, remove the nth node from the end of the list and return its head.


// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// Your removeNthFromEnd function
var removeNthFromEnd = function(head, n) {

    let dummy = new ListNode(0);
    dummy.next = head
 

    let first = dummy
    let second = dummy
    
    // Move the first pointer n+1 steps ahead
    for (let i = 0; i <= n; i++) {
        first = first.next
 
    }
 
    while (first !== null){
        first = first.next
        second = second.next
    }

    second.next = second.next.next
    
    return dummy.next;
};

// Helper function to print the linked list
function printList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(' -> '));
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Test case: [1, 2, 3, 4, 5], remove the 2nd node from the end
let head = createLinkedList([1, 2, 3, 4, 5]);
console.log("Original list:");
printList(head);

head = removeNthFromEnd(head, 2);
console.log("After removing 2nd node from the end:");
printList(head);
