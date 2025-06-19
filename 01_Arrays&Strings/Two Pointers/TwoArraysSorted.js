
/**
 Given two sorted integer arrays arr1 and arr2, return a new array that combines both of them and is also sorted.
 */
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var combine = function(arr1, arr2) {
    res = [];
    let i = 0, j = 0;

    while ( i < arr1.length && j < arr2.length ) {
        if ( arr1[i] < arr2[j] ) {
            res.push(arr1[i]);
            i++;
        } else {
            res.push(arr2[j]);
            j++;
        }
    }

    while ( i < arr1.length ) {
        res.push(arr1[i]);
        i++;
    }

    while ( j < arr2.length ) {
        res.push(arr2[j]);
        j++;
    }

    return res;
}
/**
This algorithm has a time complexity of O(n) and uses O(1) space 
(if we don't count the output as extra space, which we usually don't).
 */