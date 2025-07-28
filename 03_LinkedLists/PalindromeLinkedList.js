
/**
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example 1:

Input: head = [1,2,2,1]
Output: true

Example 2:

Input: head = [1,2]
Output: false
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if ( !head || !head.next ) return true;
    //Step 1: Find middle of list
    let end = head;
    let mid = head;
    while ( end && end.next ) {
        mid = mid.next;
        end = mid.next.next;
    }
    //Step 2: Reverse the second half
    let prev = null;
    let curr = mid;
    while ( curr ) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    //Step 3: Compare the two halves
    let left = head;
    let right = prev;
    while ( right ) {
        if ( left.val !== right.val ) return false;
        left = left.next;
        right = right.next;
    }
    return true;
};