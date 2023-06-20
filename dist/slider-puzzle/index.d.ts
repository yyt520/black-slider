/// <reference types="react" />
import './index.less';
import SliderPuzzleCanvas from './slider-puzzle-canvas';
import SliderPuzzleItem from './slider-puzzle-item';
import { SliderPuzzleCanvasProps, SliderPuzzleInstance, SliderPuzzleItemProps, SliderPuzzleProps } from './type';
declare const SliderPuzzle: import("react").ForwardRefExoticComponent<{
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
} & import("../utils/native-props").NativeProps<never> & Omit<SliderPuzzleCanvasProps, "index"> & import("react").RefAttributes<SliderPuzzleInstance>> & {
    Item: (comProps: SliderPuzzleItemProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    Canvas: (comProps: SliderPuzzleCanvasProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
};
export { SliderPuzzle, SliderPuzzleItem, SliderPuzzleCanvas };
export type { SliderPuzzleProps, SliderPuzzleItemProps, SliderPuzzleCanvasProps, SliderPuzzleInstance, };
export default SliderPuzzle;
