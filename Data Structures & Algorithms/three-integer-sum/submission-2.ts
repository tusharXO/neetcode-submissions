class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const len = nums.length
        if (len < 3) return [];

        nums.sort((a, b) => a - b);
        if (nums[0] > 0 || nums[len - 1] < 0) return [];

        const result: number[][] = [];

        for(let i = 0;i < len - 2;i++){
            if(i > 0 && nums[i] === nums[i-1]) continue;
            if(nums[i] > 0) break;
            let left = i + 1;
            let right = len - 1
            let target = -nums[i]
            while(left < right){
                const sum = nums[left] + nums[right]
                if( sum === target){
                    result.push([nums[i],nums[left],nums[right]])
                    while(left < right && nums[left] === nums[left + 1]) left++;
                    while(left < right && nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                }else if(sum > target){
                    right--;
                }else{
                    left++;
                }
            }
        }
        return result;
    }
}
