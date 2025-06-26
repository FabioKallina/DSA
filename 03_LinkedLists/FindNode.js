
/**
Given the head of a linked list and an integer k, return the k^th node from the end.
For example, given the linked list that represents 1 -> 2 -> 3 -> 4 -> 5 and k = 2, return the node with value 4, as it is the 2nd node from the end.
 */
let findNode = (head, k) => {
    let slow = head;
    let fast = head;
    for ( let i = 0; i < k; i++ ) {
        fast = fast.next
    }
    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
}
/**
 * The idea here is to move the fast pointer k ahead of slow with the first for loop
 * Then we iterate while fast != null;
 * this works because since fast is k ahead, when fast becomes null, slow will be at k
 * hence why we can return slow once the while loop ends
 */