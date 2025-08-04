/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;

    for (let i=0; i<nums.length; i++){
        if (nums[i] !== val){
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};

// Test function to verify the solution
function runTests() {
    // Test case 1
    let nums1 = [3, 2, 2, 3];
    let val1 = 3;
    let k1 = removeElement(nums1, val1);
    console.log("Test 1 - k:", k1);
    console.log("Array:", nums1.slice(0, k1));
    
    // Test case 2
    let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
    let val2 = 2;
    let k2 = removeElement(nums2, val2);
    console.log("Test 2 - k:", k2);
    console.log("Array:", nums2.slice(0, k2));
    
    // Test case 3 - edge case: empty array
    let nums3 = [];
    let val3 = 1;
    let k3 = removeElement(nums3, val3);
    console.log("Test 3 - k:", k3);
    console.log("Array:", nums3.slice(0, k3));
    
    // Test case 4 - all elements are val
    let nums4 = [1, 1, 1];
    let val4 = 1;
    let k4 = removeElement(nums4, val4);
    console.log("Test 4 - k:", k4);
    console.log("Array:", nums4.slice(0, k4));
}

// Run the tests
runTests();