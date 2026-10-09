class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left = 0;
        let right = s.length - 1;
        while(left < right){
            if(!this.isAlphanumeric(s[left])){
                left++;
                continue;
            }
            if(!this.isAlphanumeric(s[right])){
                right--;
                continue;
            }
            if(s[left].toLowerCase() !== s[right].toLowerCase()){
                return false;
            }
            right--;
            left++;
        }
        return true;
    }

    private isAlphanumeric(char: string): boolean{
        const code = char.charCodeAt(0)
        return (code >= 48 && code <= 57) ||
               (code >= 65 && code <= 90) ||
               (code >= 97 && code <= 122);
    }
}
