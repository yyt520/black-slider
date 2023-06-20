import { SliderPuzzleInstance } from './type';
import React from 'react';
declare const SliderPuzzle: React.ForwardRefExoticComponent<{
    listLength?: number | undefined;
    size?: number | undefined;
    gap?: number | undefined;
    background?: string | undefined;
    isGameMode?: boolean | undefined;
    fillPuzzleItemBackground?: string | undefined;
    onComplete?: (() => void) | undefined;
    onResize?: ((grid: {
        w: number;
        h: number;
    }) => void) | undefined;
} & import("../utils/native-props").NativeProps<never> & Omit<import("./type").SliderPuzzleCanvasProps, "index"> & React.RefAttributes<SliderPuzzleInstance>>;
export default SliderPuzzle;
