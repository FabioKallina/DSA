
/**
It is a sweltering summer day, and a boy wants to buy some ice cream bars.
At the store, there are n ice cream bars. You are given an array costs of length n, 
where costs[i] is the price of the ith ice cream bar in coins. The boy initially has coins coins to spend, 
and he wants to buy as many ice cream bars as possible. 
Note: The boy can buy the ice cream bars in any order.
Return the maximum number of ice cream bars the boy can buy with coins coins.
You must solve the problem by counting sort.

Example 1:

Input: costs = [1,3,2,4,1], coins = 7
Output: 4
Explanation: The boy can buy ice cream bars at indices 0,1,2,4 for a total price of 1 + 3 + 2 + 1 = 7.

Example 2:

Input: costs = [10,6,8,7,7,8], coins = 5
Output: 0
Explanation: The boy cannot afford any of the ice cream bars.

Example 3:

Input: costs = [1,6,3,1,2,5], coins = 20
Output: 6
Explanation: The boy can buy all the ice cream bars for a total price of 1 + 6 + 3 + 1 + 2 + 5 = 18.
*/
/** My Solution
 * 
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    //sort costs so that cheapest bars are bought first in order to maximize how many bars bough
    costs.sort((a, b) => a - b);

    //keep track of bought bars
    let count = 0;

    //loop through costs
    for ( let i = 0; i < costs.length; i++ ){
        //check if you can buy it
        if ( coins >= costs[i] ) {
            //buy it
            coins -= costs[i];
            //add to count
            count++;
        } else {
            break;
        }
    }
    return count;
}
/** Time and Space Complexity
 * Time: O(nlogn)
 * Space: O(logn) from sort
 */

/** Count Sorting
 * 
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    //find the max val in the array
    let maxCost = Math.max(...costs);
    //create an empty array with length of the max val + 1
    let count = new Array(maxCost + 1).fill(0);

    //track the freq of each bar at its respective price (for ex if a bar costs 8 and it appears once, youll have a 1 at the 9th index)
    for ( let cost of costs ) {
        count[cost]++;
    }

    //initialize tracker for bars bought
    let bars = 0;
    //loop up until max val
    for ( let price = 1; price <= maxCost; price++ ) {
        //while the price in count is not 0 AND we have the money
        while ( count[price] > 0 && coins >= price ) {
            coins -= price;
            bars++;
            count[price]--;
        }
        if ( coins < price ) {
            break; //break if we run out of money
        }
    }
    return bars;
}
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(k)
 */