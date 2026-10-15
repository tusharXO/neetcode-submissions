class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const char = new Set()
        let l = 0;
        let res = 0

        for(let r = 0;r < s.length;r++){
            while(char.has(s[r])){
                char.delete(s[l])
                l++;
            }
            char.add(s[r])
            res = Math.max(res, char.size)
        }

        return res
    }
}
