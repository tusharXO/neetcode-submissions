class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const result = [];
        const numbers = [...nums].sort((a,b) => a - b)

        console.log(numbers)

        for(let i = 0;i < numbers.length - 2;i++){
            if(i > 0 && numbers[i] === numbers[i-1]) continue;
            if(numbers[i] > 0) break;
            let left = i + 1;
            let right = numbers.length - 1
            let target = -numbers[i]
            while(left < right){
                const sum = numbers[left] + numbers[right]
                if( sum === target){
                    result.push([numbers[i],numbers[left],numbers[right]])
                    while(left < right && numbers[left] === numbers[left + 1]) left++;
                    while(left < right && numbers[right] === numbers[right - 1]) right--;
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
