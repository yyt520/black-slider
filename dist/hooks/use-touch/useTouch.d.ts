import { MouseTouchE, TouchEventType } from '../../utils/handleDom';
export declare type TouchDirection = '' | 'vertical' | 'horizontal';
export declare type TouchState = {
    /** x的起始的位置 */
    startX: number;
    /** y的起始的位置 */
    startY: number;
    /** x的偏移量 */
    deltaX: number;
    /** y的偏移量 */
    deltaY: number;
    /** x的位移 正数 */
    offsetX: number;
    /** y的位移 正数 */
    offsetY: number;
    /** 当前移动的方向 */
    direction: TouchDirection;
    /** 触摸开始到结束的时间 */
    time: number;
};
declare const useTouch: () => {
    info: TouchState;
    move: (event: TouchEventType | MouseTouchE) => void;
    start: (event: TouchEventType | MouseTouchE) => void;
    reset: () => void;
};
export default useTouch;
