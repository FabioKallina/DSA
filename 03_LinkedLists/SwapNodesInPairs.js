
/**
Given the head of a linked list, swap every pair of nodes. 
For example, given a linked list 1 -> 2 -> 3 -> 4 -> 5 -> 6, return a linked list 2 -> 1 -> 4 -> 3 -> 6 -> 5.
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
var swapPairs = function(head) {

    if ( !head || !head.next ) {
        return head;
    }

    let dummy = head.next;
    let prev = null;
    while ( head && head.next ) {
        if ( prev ) {
            prev.next = head.next;
        }
        prev = head;

        let nextNode = head.next.next;
        head.next.next = head;

        head.next = nextNode;
        head = nextNode;
    }
    return dummy;
}