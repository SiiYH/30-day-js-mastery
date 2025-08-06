/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let numsMap = new Map();

    for (let i = 0; i<nums.length; i++){
        const currentNum = nums[i];
        if(numsMap.has(nums[i])){
            const prevIndex = numsMap.get(currentNum);
            const dist = i - prevIndex;

            if(dist <= k){
                return true;
            }
        }
        numsMap.set(currentNum, i);
    }
    return false;
};