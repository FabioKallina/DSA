
/**
Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. 
Koko can decide her bananas-per-hour eating speed of k. 
Each hour, she chooses a pile and eats k bananas from that pile. 
If the pile has less than k bananas, she eats all of them and will not eat any more bananas during the hour. 
Return the minimum integer k such that she can eat all the bananas within h hours.
*/
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let check = k => {
        let hours = 0;
        for (const bananas of piles) {
            hours += Math.ceil(bananas/k);
        }
        return hours <= h;
    }

    let left = 1;
    let right = Math.max(...piles);
    while ( left <= right ) {
        let mid = Math.floor((left + right) / 2);
        if ( check(mid) ) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
}
/** Time and Space Complexity
 * Time: O(n * logk) where n is for the check, and logk for the binary search
 * Space: O(1)
 */