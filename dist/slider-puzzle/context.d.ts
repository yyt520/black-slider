import React from "react";
import { GridPosition, SliderPuzzleCanvasProps } from "./type";
export declare const SliderPuzzleCtx: React.Context<SliderPuzzleCtxType>;
export declare type SliderPuzzleCtxType = {
    /** n*n */
    size: number;
    /** 初始空格索引 */
    initSpaceIndex: number;
    /** 格子的宽高 */
    grid: {
        w: number;
        h: number;
    };
    /** 格子中的二维数组 */
    gridArr?: number[][];
    /** 拼图块的位置随机数组 */
    puzzleGridArr?: number[];
    /** 绘画的字母 */
    letter: string;
    /** 是否重新设置拼图 */
    isReset: boolean;
    gap: number;
    isGameMode?: boolean;
    onChangeGrid: (p: GridPosition, preParams: GridPosition) => void;
} & Omit<SliderPuzzleCanvasProps, 'index'>;
