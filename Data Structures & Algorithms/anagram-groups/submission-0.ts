class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const res = new Map();

        for(const i of strs){
            const count = new Array(26).fill(0)
            for(const j of i){
                count[j.codePointAt(0) - "a".codePointAt(0)] += 1
            }
            const key = count.join(",")
            if(!res.has(key)){
                res.set(key,[])
            }
            res.get(key)!.push(i)
        }

        return Array.from(res.values())
    }
}
