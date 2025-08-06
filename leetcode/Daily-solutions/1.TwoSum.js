/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashmap = new Map();
    for (let i=0; i<nums.length; i++){
        const hash = target - nums[i];

        if (hashmap.has(hash)){
            return [hashmap.get(hash), i];
        }
        hashmap.set(nums[i], i);
    }
    return;
};