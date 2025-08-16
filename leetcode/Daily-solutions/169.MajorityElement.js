/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const countMap = new Map();

    for (num of nums){
        countMap.set(num, (countMap.get(num) || 0 ) + 1);

        if(countMap.get(num) > Math.floor(nums.length/2)){
            return num;
        }
    }
};