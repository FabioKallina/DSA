
/**
Given the head of a linked list with an odd number of nodes head, return the value of the node in the middle.
For example, given a linked list that represents 1 -> 2 -> 3 -> 4 -> 5, return 3.
 */
//Two ways of doing it
let getMiddle = head => {
    let length = 0;
    let dummy = head;
    while (dummy) {
        length++;
        dummy = dummy.next;
    }

    for ( let i = 0; i < Math.floor(length / 2); i++ ) {
        head = head.next
    }

    return head.val;
}

//Slow and fast pointers
let getMiddle2 = head => {
    let slow = head;
    let fast = head;

    while(fast & fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow.val
}
/**
 * The idea here is the since the fast pointer moves 2x as fast
 * when it gets to the end slow will be in the middle
 */