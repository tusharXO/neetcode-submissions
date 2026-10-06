class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length){
            return false;
        }
        let sSet: Map<string, number> = new Map();
        let tSet: Map<string, number> = new Map();

        for(let i = 0; i < s.length;i++){
            sSet.set(s[i], (sSet.get(s[i]) ?? 0) + 1)
            tSet.set(t[i], (tSet.get(t[i]) ?? 0) + 1)
        }

        for(let i = 0; i < s.length;i++){
            if(sSet.get(s[i]) !== tSet.get(s[i])){
                return false;
            }
        }

        return true;
    }
}
