/** 用于比较num 最大和最小不能超过边界值 */
export declare function range(num: number, min: number, max: number): number;
/** 初始化创建二维数组 */
export declare function createTwoArray<T>(rowNum: number, colNum: number, cb: (rowNum: number, colNum: number) => T): T[][];
/** 方向 1:左 2:上 3:右 4:下 0:不能移动 */
export declare type DirectionType = 1 | 2 | 3 | 4 | 0;
/** 检查可以移动的方向  */
export declare function checkDirectionVal(arr: number[][], row: number, col: number): DirectionType;
/** 检查xy的移动方向 */
export declare function checkDirectionXY(deltaX: number, deltaY: number): {
    directionX: DirectionType;
    directionY: DirectionType;
};
