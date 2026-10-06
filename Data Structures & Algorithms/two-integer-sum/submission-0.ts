class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let counter: Map<number, number> = new Map();

        for(let i = 0;i < nums.length;i++){
            const diff = target - nums[i];

            if(counter.has(diff)){
                return [i, counter.get(diff)]
            }

            counter.set(nums[i], i)
        }
    }
}
