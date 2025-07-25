
/**
Given the head of a sorted linked list, delete all nodes that have duplicate numbers, 
leaving only distinct numbers from the original list. Return the linked list sorted as well.

Example 1:

Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]

Example 2:

Input: head = [1,1,1,2,3]
Output: [2,3]
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
    let dummy = new ListNode(0, head); //handle base cases such as duplicates at the start
    let prev = dummy;
    let curr = head;
    while ( curr ) {
        //check if duplicate
        if ( curr.next && curr.val === curr.next.val ) {
            //while there are duplicates, move curr up
            while ( curr.next && curr.val === curr.next.val ) {
                curr = curr.next;
            }
            //point prev ahead of curr
            prev = curr.next;
        } else {
            //no duplicates
            prev = prev.next
        }
        //move curr up
        curr = curr.next;
    }
    //return dummy head
    return dummy.next;
};