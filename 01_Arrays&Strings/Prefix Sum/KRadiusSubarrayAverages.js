
/**

 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    let n = nums.length;
    let windowSize = 2 * k + 1;
    const averages = new Array(n).fill(-1);
    let prefix = new Array(n + 1).fill(0);

    if ( k === 0 ) {
        return nums;
    }
    if ( windowSize > n ) {
        return averages;
    }
    for ( let i = 0; i < n; i++ ) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
    for ( let i = k; i < (n - k); i++ ) {
        const leftBound = i - k, rightBound = i + k;
        const subArraySum = prefix[rightBound + 1] - prefix[leftBound];
        const average = Math.floor(subArraySum / windowSize);
        averages[i] = average;
    }
    return averages;
}