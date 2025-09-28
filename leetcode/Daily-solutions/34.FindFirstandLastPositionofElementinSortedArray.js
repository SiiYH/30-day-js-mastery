/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const findLeft = (nums, target) =>{
        let left = 0, right = nums.length-1, index=-1;
        while(left <= right){
            let mid = Math.floor(( left + right )/2);
            let midVal = nums[mid];

            if (target > midVal){left = mid + 1}
            else {right = mid - 1}

            if (target === midVal){ index = mid}

        }
        return index;
    }
    const findRight = (nums, target) =>{
        let left = 0, right = nums.length-1, index = -1;
        while(left <= right){
            let mid = Math.floor(( left + right )/2);
            let midVal = nums[mid];

            if (target < midVal){right = mid - 1}
            else {left = mid + 1}

            if (target === midVal){index = mid}
        }
        return index;
    }

    return [findLeft(nums, target), findRight(nums, target)];
};