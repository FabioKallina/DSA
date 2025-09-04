
/**
You are given an array time where time[i] denotes the time taken by the ith bus to complete one trip.
Each bus can make multiple trips successively; that is, the next trip can start immediately after completing the current trip. 
Also, each bus operates independently; that is, the trips of one bus do not influence the trips of any other bus.
You are also given an integer totalTrips, which denotes the number of trips all buses should make in total. 
Return the minimum time required for all buses to complete at least totalTrips trips.

Example 1:

Input: time = [1,2,3], totalTrips = 5
Output: 3
Explanation:
- At time t = 1, the number of trips completed by each bus are [1,0,0]. 
The total number of trips completed is 1 + 0 + 0 = 1.
- At time t = 2, the number of trips completed by each bus are [2,1,0]. 
The total number of trips completed is 2 + 1 + 0 = 3.
- At time t = 3, the number of trips completed by each bus are [3,1,1]. 
The total number of trips completed is 3 + 1 + 1 = 5.
So the minimum time needed for all buses to complete at least 5 trips is 3.

Example 2:

Input: time = [2], totalTrips = 1
Output: 2
Explanation:
There is only one bus, and it will complete its first trip at t = 2.
So the minimum time needed to complete 1 trip is 2.
*/
/**
 * What is this? - A problem on efficiency
 * Why is it? - It is to test the most efficient way of getting a result
 * When will I need this? - Whenever I come across a problem that needs me to be most efficient
 * How does this connect to what I already know? - This is a greedy algorithm, something that gets an answer in the "laziest" (best) way
 */
/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
    //lower bound is lowest possible time
    let l = 1;
    //upper bound is the fastest buss doing all trips
    let r = Math.min(...time) * totalTrips;
    let ans = r;

    //helper function: how many trips can we finish by time mid?
    let isPossible = ( mid ) => {
        let trips = 0;
        for ( let t of time ) {
            trips += Math.floor( mid / t );
            if ( trips >= totalTrips ) return true; //early exit
        }
        return trips >= totalTrips;
    }

    while ( l <= r ) {
        let mid = Math.floor((l + r) / 2);

        if ( isPossible(mid) ) {
            ans = mid;
            //try a smaller time (mid)
            r = mid - 1;
        } else {
            //need more time
            l = mid + 1;
        }
    }
    return ans;
};
/** Time and Space Complexity
 * Time: O(nlog * m)
 * Space: O(1)
 */