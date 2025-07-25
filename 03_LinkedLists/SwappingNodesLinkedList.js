
/**
You are given the head of a linked list, and an integer k.
Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end 
(the list is 1-indexed).

Example 1:

Input: head = [1,2,3,4,5], k = 2
Output: [1,4,3,2,5]

Example 2:

Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output: [7,9,6,6,8,7,3,0,9,5]
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/** Swapping values 
 * 
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    if ( !head ) return null;

    let left = head, right = head;
    for ( let i = 1; i < k; i++ ) {
        right = right.next;
    }
    let curr = right.next;
    while ( curr.next ) {
        curr = curr.next;
        left = left.next;
    }
    let temp = left.val;
    left.val = right.val;
    right.val = temp;
    return head;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(1)
 */

/** Swapping values 
 * 
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    if ( !head || head.next ) return null;

    let dummy = new ListNode(0, head);
    let length = 0;
    let curr = head;

    //get length of list;
    while ( curr ) {
        length++;
    }

    let firstPrev = dummy;
    let secondPrev = dummy;
    for ( let i = 1; i < k; i++ ) {
        firstPrev = firstPrev.next;
    }
    for ( let i = 1; i < length - k + 1; i++ ) {
        secondPrev = secondPrev.next;
    }

    let first = firstPrev.next;
    let second = secondPrev.next;

    //if same node, no swap needed
    if ( first == second ) return head;

    //If nodes are adjacent, hadnle carefully
    if ( firstPrev.next === secondPrev ) {
        [firstPrev, secondPrev] = [secondPrev, firstPrev];
        [first, second] = [second, first];
    }

    if ( first.next === second ) {
        //adjacent nodes
        firstPrev.next = second;
        first.next = second.next;
        second.next = first;
    } else {
        let temp = first.next;
        firstPrev.next = second;
        secondPrev.next = first;
        first.next = second.next;
        second.next = temp;
    }
    return dummy.next;
};