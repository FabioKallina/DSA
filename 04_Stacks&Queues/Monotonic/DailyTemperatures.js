/**
Given an array of integers temperatures that represents the daily temperatures, 
return an array answer such that answer[i] is the number of days you have to wait after the  ith
day to get a warmer temperature. If there is no future day that is warmer, have answer[i] = 0 instead.
 */
/**
 * 
 * @param {number[]} temperatures
 * @returns {number} 
 */
var dailyTemperatures = function(temperatures) {
    let stack = [];
    let ans = new Array(temperatures.length).fill(0);

    for ( i = 0; i < temperatures.length; i++ ) {
        while ( stack.length && temperatures[stack[stack.length - 1]] < temperatures[i] ) {
            stack.pop();
            answer[j] = i - j;
        }
        stack.push(i);
    }
    return ans;
}