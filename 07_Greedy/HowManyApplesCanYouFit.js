
/**
You have some apples and a basket that can carry up to 5000 units of weight.
Given an integer array weight where weight[i] is the weight of the ith apple, 
return the maximum number of apples you can put in the basket.

Example 1:

Input: weight = [100,200,150,1000]
Output: 4
Explanation: All 4 apples can be carried by the basket since their sum of weights is 1450.

Example 2:

Input: weight = [900,950,800,1000,700,800]
Output: 5
Explanation: The sum of weights of the 6 apples exceeds 5000 so we choose any 5 of them.
*/
/**
 * 
 * @param {number[]} weight 
 * @returns {number}
 */
var howManyApples = function(weight) {
    //define limit
    let lim = 5000;
    //sort from asceding order
    weight.sort((a, b) => a - b);
    //initialize a variable to track the sum
    let sum = 0;
    let i = 0;
    //iterate through the array
    while ( i < weight.length ) {
        //check if the sum + the current weight exceeds the limit
        if ( sum + weight[i] > lim ) break;
        //add weight[i] to sum
        sum += weight[i];
        //increase i
        i++;
    }
    return i;
}