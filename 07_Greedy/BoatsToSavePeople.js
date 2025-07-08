
/**
You are given an array people where people[i] is the weight of the ith person. 
A boat can hold up to two people, if their weight combined is less than or equal to limit. 
What is the fewest number of boats you need to carry everyone? Note: no person is heavier than limit.
Input: [1, 2, 2, 3], limit = 3
Output: 3
*/
/**
 * 
 * @param {number[]} people 
 * @param {number} limit
 * @returns {number} 
 */
var numRescueBoats = function(people, limit) {
    //sort in ascendin order
    people.sort((a, b) => a - b);
    //initialize 2 pointers
    let l = 0;
    let r = people.length - 1;
    let ans = 0;
    //iterate until pointers meet
    while ( l <= r ) {
        //check if limit is not exceeded
        if ( people[i] + people[j] <= limit ) {
            l++;
        }
        r--;
        ans++;
    }
    return ans;
}
/** Time and Space Complexity
 * Time: O(nlogn)
 * Space: O(1) if you're allowed to modify the input array, O(n) if a copy is needed
 */