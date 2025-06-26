/**
Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.

Example 1:

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Example 2:

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 
 * @param {listNode} head 
 * @returns {listNode}
 */
var middleNode = function(head) {
    let middle = head;
    let end = head;
    while ( end !== null && end.next !== null ) { // end !== null is for even lists, end.next !== null is odd lists
        middle = middle.next;
        end = end.next.next;
    }
    return middle;
}