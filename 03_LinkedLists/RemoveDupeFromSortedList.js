
/**
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. 
Return the linked list sorted as well.

Example 1:

Input: head = [1,1,2]
Output: [1,2]

Example 2:

Input: head = [1,1,2,3,3]
Output: [1,2,3]
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    //initialize a curr variable set to head
    let curr = head;
    //iterate until end of list, that is until 
    while ( curr !== null && curr.next !== null ) {
        if ( curr.next.val === curr.val ) {
            curr.next = curr.next.next;
        }
        else {
            curr = curr.next;
        }
    }
    return head;
};