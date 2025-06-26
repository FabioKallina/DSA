
/**
Given the head of a singly linked list and two integers left and right where left <= right, 
reverse the nodes of the list from position left to position right, and return the reversed list.

Example 1:

Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Example 2:

Input: head = [5], left = 1, right = 1
Output: [5]
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if ( head == null ) {
        return null;
    }
    let curr = head, prev = null;
    while ( left > 1 ) {
        prev = curr;
        curr = curr.next;
        left--;
        right--;
    }
    let con = prev, tail = curr;
    let third = curr.next;
    while ( right > 0 ) {
        third = curr.next;
        curr.next = prev;
        prev = curr;
        curr = third;
        right--;
    }
    if ( con !== null ) {
        con.next = prev;
    } else {
        head = prev;
    }
    tail.next = curr;
    return head;
};