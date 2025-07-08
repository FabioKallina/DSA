/**
Given an array of integers arr and an integer k, find the least number of unique integers after removing exactly k elements.
Input: [4, 3, 1, 1, 3, 3, 2], k = 3
Output: 
*/
/**
 * 
 * @param {number[]} arr 
 * @param {number} k 
 * @returns {number}
 */
var leastUnique = function(arr, k) {
    //track frequencies
    const freq = new Map();
    for ( const n of arr ) {
        freq.set(n, (freq.get(n) || 0) + 1);
    }
    //get the frequency values and sort them decreasingly
    let order = [];
    for ( const val of freq.values() ) {
        order.push(val);
    }
    order.sort((a, b) => b - a);
    //iterate through k until it reaches 0
    while ( k > 0 ) {
        let value = order[order.length - 1]; //this gets the least frequent element
        if ( value <= k ) {
            k -= value; //decrease k by the amount of elements deleted
            order.pop(); //remove deleted element from the end of the sorted array
        } else {
            //if there isnt an element <= k, just break the loop and return the remaining element in the sorted array
            break;
        }
    }
    return order.length;
}
/** Time and Space Complexity
 * Time : O(nlogn)
 * Space: O(n) due to hash map
 */