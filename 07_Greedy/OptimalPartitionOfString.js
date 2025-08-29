
/**
Given a string s, partition the string into one or more substrings such that the characters in each substring are unique. That is, no letter appears in a single substring more than once.
Return the minimum number of substrings in such a partition.
Note that each character should belong to exactly one substring in a partition.

Example 1:

Input: s = "abacaba"
Output: 4
Explanation:
Two possible partitions are ("a","ba","cab","a") and ("ab","a","ca","ba").
It can be shown that 4 is the minimum number of substrings needed.
Example 2:

Input: s = "ssssss"
Output: 6
Explanation:
The only valid partition is ("s","s","s","s","s","s").
*/
/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let charSet = new Set(); //create new set to track freq
    let subs = 1; //start substring count with 1
    
    //loop over characters
    for ( let c of s ) {
        //check if it already exists
        if ( !charSet.has(c) ) {
            //if not, add it
            charSet.add(c);
        } else { //if duplicate
            subs++; //increase substring count
            charSet.clear(); //clear the current set
            charSet.add(c); //add the current (which is not a duplicate anymore after clear) to the set
        }
    }
    return subs;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(1)
 */

/** Similar Approach
 * 
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let seen = new Set();
    let count = 0;

    for ( let c of s ) {
        if ( seen.has(c) ) {
            count++;
            seen.clear;
        }
        seen.add(c);
    }
    return count;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(1)
 */