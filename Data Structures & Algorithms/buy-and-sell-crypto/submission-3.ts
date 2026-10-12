class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0;
        let buy = prices[0];

        for(let i = 0;i < prices.length;i++){
            buy = Math.min(buy,prices[i])
            const profit = prices[i] - buy
            maxProfit = Math.max(maxProfit, profit)
        }

        return maxProfit;
    }
}
