/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // Start from the end of both arrays
    let i = m - 1;      // Last valid element in nums1
    let j = n - 1;      // Last element in nums2
    let k = m + n - 1;  // Last position in nums1 (where we'll place elements)

    while (i >= 0 && j>=0 ){
        if (nums1[i] > nums2[j]){
            nums1[k] = nums1[i];
            i--;
        }
        else{
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    while (j>=0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};