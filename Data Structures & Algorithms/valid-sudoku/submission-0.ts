class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = new Map<number, Set<string>>();
        const cols = new Map<number, Set<string>>();
        const squares = new Map<string, Set<string>>();

        for(let r = 0;r < 9;r++){
            for(let c = 0;c < 9;c++){
                const val = board[r][c]

                if(board[r][c] === "."){
                    continue;
                }
                
                const squareKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`;

                if(!rows.has(r))rows.set(r,new Set())
                if(!cols.has(c))cols.set(c,new Set())
                if(!squares.has(squareKey))squares.set(squareKey,new Set())
                
                if(rows.get(r)!.has(val) ||
                cols.get(c)!.has(val) ||
                squares.get(squareKey)!.has(val)){
                    return false;
                }
                rows.get(r)!.add(val)
                cols.get(c)!.add(val)
                squares.get(squareKey)!.add(val)
            }
        }
        return true;
    }
}
