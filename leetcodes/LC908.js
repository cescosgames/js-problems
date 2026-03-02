// LC 908 - Middle of the Linked List

// Given the head of a singly LINKED LIST, return the middle node of the linked list.

var middleNode = function(head) {
    let current = head; // set our current to the first node (it's like an object with 2 properties)
    let target = head; // set our target to the first node 

    while (current !== null && current.next !== null) { // make sure we're valid and the next one is as well
        target = target.next; // got o next
        current = current.next.next; // go twice as fast, once we reach end other will be halfway
    };

    return target
}; 

// If there are two middle nodes, return the second middle node.  
// THESE EXAMPLES WON'T WORK BECAUSE THEY ARE JUST ARRAYS
// Example 1:
const head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:
const head2 = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

console.log(middleNode(head));
console.log(middleNode(head2));

// ---- LINKED LISTS & NODES ----
// A linked list is a chain of node objects. Unlike arrays, you can't
// access items by index — you must traverse from the start (head).
//
// Each node has two properties:
//   node.val  → the data it holds
//   node.next → a reference to the next node (null if last)
//
// { val: 1, next: → { val: 2, next: → { val: 3, next: null } } }
//    head                                        tail
//
// To walk the list, use a pointer and follow .next each step:
//   let current = head;
//   while (current !== null) {
//       current = current.next;
//   }
// ----------------------------------