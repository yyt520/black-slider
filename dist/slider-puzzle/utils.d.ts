/** 创建一个打乱的不重复数字的数组 */
export declare function randomNumberArray(size: number): number[];
/** 判断是否完成拼图 */
export declare function isPuzzleSolved(arr: number[][]): boolean;
/** 获取行列的位置 */
export declare function getRowColItem(index: number, spaceIndex: number, size: number): {
    rowNum: number;
    colNum: number;
};
