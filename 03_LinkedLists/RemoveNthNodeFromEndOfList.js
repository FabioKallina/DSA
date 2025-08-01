
/**
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:

Input: head = [1], n = 1
Output: []

Example 3:

Input: head = [1,2], n = 1
Output: [1]
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head);
    let fast = dummy;
    let slow = dummy;

    for ( let i = 0; i < n; i++ ) {
        fast = fast.next;
    }

    while ( fast.next ) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;
    return dummy.next;
};
/**
 * Initializing a dummy hadles edge cases such as:
    * List with 1 node ([1], n = 1) → returns null
    * Remove the head node ([1, 2], n = 2) → returns [2]
    * Remove the last node ([1, 2, 3], n = 1) → returns [1, 2]
    * Remove a middle node ([1, 2, 3], n = 2) → returns [1, 3]
 */