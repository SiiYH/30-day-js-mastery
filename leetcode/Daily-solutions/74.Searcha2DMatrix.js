/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0 || !matrix) return false;

    let m = matrix.length;
    let n = matrix[0].length;
    let left = 0, right = m * n - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let row = Math.floor(mid / n);
        let col = mid % n;
        let midValue = matrix[row][col];

        if (midValue === target){return true;}
        else if (midValue < target){left = mid + 1;}
        else{right = mid - 1;}
    }

    return false;
}