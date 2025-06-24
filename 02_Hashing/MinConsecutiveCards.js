/**
Given an integer array cards, find the length of the shortest subarray that contains at least one duplicate. 
If the array has no duplicates, return -1.
For example, given cards = [1, 2, 6, 2, 1], we would map 1: [0, 4], 2: [1, 3], and 6: [2].
Then we can iterate over the values and see that the minimum difference can be achieved from picking up the 2s.
 */
/**
 * @param {number[]} cards
 * @returns {number}
 */
var minCardPickup = function(cards) {
    let map = new Map();
    for ( let i = 0; i < cards.length; i++ ) {
        if ( !map.has(cards[i]) ) {
            map.set(cards[i], []);
        }
        map.get(cards[i]).push(i);
    }
    let ans = Infinity;
    for ( const [key, arr] of map ) {
        for ( let i = 0; i < arr.length - 1; i++ ) {
            ans = Math.min(ans, (arr[i + 1] - arr[i]) + 1)
        }
    }
    return ans === Infinity ? -1 : ans;
}
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */

/** Better
 * 
 * @param {number[]} cards
 * @returns {number}
 */
var minCardPickup = function(cards) {
    let map = new Map();
    let ans = Infinity;
    for ( let i = 0; i < cards.length; i++ ) {
        if (map.has(cards[i]) ) {
            ans = Math.min(ans, i - map.get(cards[i] + 1))
        }
        map.set(cards[i], i);
    }
    return ans === Infinity ? -1 : ans;
}
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */