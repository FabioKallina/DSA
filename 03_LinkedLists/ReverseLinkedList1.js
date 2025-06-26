/**
Imagine that we have a linked list 1 -> 2 -> 3 -> 4, and we want to return 4 -> 3 -> 2 -> 1. 
Let's say we keep a pointer curr that represents the current node we are at. 
Starting with curr at the 1, we need to get the 2 to point to curr. 
The problem is, once we iterate (curr = curr.next) to get to the 2, 
we no longer have a pointer to the 1 because it is a singly linked list. 
To get around this, we can use another pointer prev that tracks the previous node.

At any given node curr, we can set curr.next = prev to switch the direction of the arrow. 
Then, we can update prev to be curr in preparation for the next node. 
However, if we change curr.next, we will lose that next node. 
To fix this, we can use a temporary variable nextNode to point to the next node before changing any of the other pointers.
*/
let reversedList = head => {
    let prev = null;
    let curr = head;
    while (curr) { //head -> 1 -> 2 -> 3 -> 4 -> null
        let nextNode = curr.next; //1 //2 //3 //4 //null
        curr.next = prev; //1 = null // 2 = head //3 = 1 //4 = 2 //null = 3
        prev = curr; //null = head //head = 1 //1 = 2 //2 = 3 //3 = 4
        curr = nextNode; //head = 1 //1 = 2 //2 = 3 //3 = 4 //4 = null
    }
    return prev;
}
/** Time and Space Complexity
 * Time; O(n)
 * Space: O(1)
 */