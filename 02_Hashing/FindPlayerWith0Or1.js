/**
You are given an integer array matches where matches[i] = [winneri, loseri] 
indicates that the player winneri defeated player loseri in a match.

Return a list answer of size 2 where:

answer[0] is a list of all players that have not lost any matches.
answer[1] is a list of all players that have lost exactly one match.
The values in the two lists should be returned in increasing order.

Note:

You should only consider the players that have played at least one match.
The testcases will be generated such that no two matches will have the same outcome.
 

Example 1:

Input: matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
Output: [[1,2,10],[4,5,7,8]]
Explanation:
Players 1, 2, and 10 have not lost any matches.
Players 4, 5, 7, and 8 each have lost one match.
Players 3, 6, and 9 each have lost two matches.
Thus, answer[0] = [1,2,10] and answer[1] = [4,5,7,8].

Example 2:

Input: matches = [[2,3],[1,3],[5,4],[6,4]]
Output: [[1,2,5,6],[]]
Explanation:
Players 1, 2, 5, and 6 have not lost any matches.
Players 3 and 4 each have lost two matches.
Thus, answer[0] = [1,2,5,6] and answer[1] = [].
 */
/** Hash Set
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let zeroLoss = new Set();
    let oneLoss = new Set();
    let moreLoss = new Set();
    for (const match of matches) {
        let winner = match[0];
        let loser = match[1];

        //Add winner
        if ( !oneLoss.has(winner) && !moreLoss.has(winner) ) {
            zeroLoss.add(winner);
        }
        //Add or remove loser
        if ( zeroLoss.has(loser) ) {
            zeroLoss.delete(loser);
            oneLoss.add(loser);
        }
        else if ( oneLoss.has(loser) ) {
            oneLoss.delete(loser);
            moreLoss.add(loser);
        }
        else if ( moreLoss.has(loser) ) {
            continue;
        }
        else {
            oneLoss.add(loser)
        }
    }
    let answer = [
        Array.from(zeroLoss).sort((a, b) => a - b),
        Array.from(oneLoss).sort((a, b) => a - b)
    ];
    return answer;
}
/** Time and Space Complexity
 * Time: O(nlogn)
 * Space: O(n)
 */

/** HashMap + Set
 * @param {number[][]} matches
 * @returns {number[][]}
 */
var findWinners = function(matches) {
    //Keep track of all players
    let seen = new Set();
    //Map to count losses
    let lCount = new Map();

    //iterate over matches
    for ( const match of matches ) {
        let winner = match[0];
        let loser = match[1];
        //Add both winner and loser to seen
        seen.add(winner);
        seen.add(loser);

        //Increment lCount[loser] by 1
        lCount.set(loser, (lCount.get(loser) || 0) + 1);
    }
    let zeroLoss = [], oneLoss = [];
    for ( const player in seen ) {
        let count = lCount.get(player);
        if (count === 0) {
            zeroLoss.push(player);
        }
        else if ( count === 1 ) {
            oneLoss.push(player)
        } else { continue }
    }
    return [
        zeroLoss.sort((a, b) => a - b),
        oneLoss.sort((a, b) => a - b)
    ];
}
/** Time and Space Complexity
 * Time: O(nlogn)
 * Space: O(n)
 */

/** HashMap
 * @param {number[][]} matches
 * @returns {number[][]}
 */
var findWinners = function(matches) {
    let lCount = new Map();
    for ( let match in matches ) {
        let winner = match[0];
        winner = match[1];

        lCount.set(winner, lCount.get(winner) || 0);
        lCount.set(loser, (lCount.get(loser) || 0 ) + 1);
    }
    let zeroLoss = [], oneLoss = [];
        for ( let [player, count] of lCount ) {
            if ( count === 0 ) {
                zeroLoss.push(player);
            }
            else if ( count === 1 ) {
                oneLoss.push(player);
            }
        }
    return [
        zeroLoss.sort((a, b) => a - b),
        oneLoss.sort((a, b) => a - b)
    ];
}
/** Time and Space COmplexity
 * Time: O(nlogn);
 * Space: O(n)
 */