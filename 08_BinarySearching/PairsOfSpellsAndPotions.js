
/**
You are given two positive integer arrays spells and potions, where spells[i] represents the strength of the ith 
spell and potions[j] represents the strength of the jthmpotion. You are also given an integer success. 
A spell and potion pair is considered successful if the product of their strengths is at least success. 
For each spell, find how many potions it can pair with to be successful. 
Return an integer array where the ith element is the answer for the ith spell.
*/
/**
 * 
 * @param {number[]} spells 
 * @param {number[]} potions 
 * @param {number} success
 * @returns {number[]} 
 */
var successfulPairs = function(spells, potions, success) {

    let binarySearch = (arr, target) => {
        let left = 0;
        let right = arr.length - 1;
        while ( left < right ) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] >= target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left
    }

    potions.sort((a, b) => a - b);
    let ans = [];
    let m = potions.length;

    for ( const spell of spells ) {
        let i = binarySearch(potions, success / spell);
        ans.push(m - i);
    }
    return ans;
}
/** Time and Space Complexity
 * Time: O((m + n) * logm)
 * Space: O(m * n)
 */