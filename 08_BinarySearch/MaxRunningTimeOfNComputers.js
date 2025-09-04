
/**
You have n computers. 
You are given the integer n and a 0-indexed integer array batteries where the ith battery can run a computer for batteries[i] minutes. 
You are interested in running all n computers simultaneously using the given batteries.
Initially, you can insert at most one battery into each computer. 
After that and at any integer time moment, you can remove a battery from a computer and insert another battery any number of times. 
The inserted battery can be a totally new battery or a battery from another computer. You may assume that the removing and inserting processes take no time.
Note that the batteries cannot be recharged.
Return the maximum number of minutes you can run all the n computers simultaneously.

Example 1:


Input: n = 2, batteries = [3,3,3]
Output: 4
Explanation: 
Initially, insert battery 0 into the first computer and battery 1 into the second computer.
After two minutes, remove battery 1 from the second computer and insert battery 2 instead. Note that battery 1 can still run for one minute.
At the end of the third minute, battery 0 is drained, and you need to remove it from the first computer and insert battery 1 instead.
By the end of the fourth minute, battery 1 is also drained, and the first computer is no longer running.
We can run the two computers simultaneously for at most 4 minutes, so we return 4.

Example 2:


Input: n = 2, batteries = [1,1,1,1]
Output: 2
Explanation: 
Initially, insert battery 0 into the first computer and battery 2 into the second computer. 
After one minute, battery 0 and battery 2 are drained so you need to remove them and insert battery 1 into the first computer and battery 3 into the second computer. 
After another minute, battery 1 and battery 3 are also drained so the first and second computers are no longer running.
We can run the two computers simultaneously for at most 2 minutes, so we return 2.
*/
/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
var maxRunTime = function(n, batteries) {
    let l = 1, r = Math.floor(batteries.reduce((a, b) => a + b, 0) / 2); //reduce.((0, b) => 0 + 3) => (3, b) => 3 + 3 => 9. Reduce basically adds it all up and the 0 is the inital value
    let ans = 0;

    let isPossible = ( mid ) => {
        let sum = 0;
        for ( let i = 0; i < batteries.length; i++ ) {
            sum += Math.min(batteries[i], mid);
        }
        return sum >= mid;
    }

    while ( l <= r ) {
        let mid = Math.floor((l + r) / 2);

        if ( isPossible(mid) ) {
            ans = mid;
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return ans;
};
/** Time and Space Complexity
 * Time: O(n * nlog(m))
 * Space: O(1)
 */