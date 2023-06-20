import { MouseTouchEvent } from '../../utils/handleDom';
import { TouchState } from '../use-touch';
export declare type UseTouchesOptions = {
    onTouchStart?: (e: MouseTouchEvent) => void;
    onTouchMove?: (e: MouseTouchEvent, touchState?: TouchState) => void;
    onTouchEnd?: (e: MouseTouchEvent) => void;
};
export declare type UseTouchesParams = {
    /** 是否鼠标所有事件（左键右键中键）都触发 */
    isAllMouseClick?: boolean;
    /** 都阻止 */
    isStopEvent?: boolean;
    /** 是否阻止事件冒泡 */
    isStopPropagation?: boolean;
    /** 是否阻止事件默认行为 */
    isPreventDefault?: boolean;
    /** 是否禁用事件 */
    isDisable?: {
        /** 禁用所有事件 */
        all?: boolean;
        onTouchStart?: boolean;
        onTouchMove?: boolean;
        onTouchEnd?: boolean;
    };
} & IsTouchEvent;
declare type IsTouchEvent = {
    /** 是否需要监听 onMouseUp 注意：会导致 onTouchEnd 触发两次 */
    isOnMouseUp?: boolean;
    /** 是否需要监听 OnTouchCancel 注意：会导致 onTouchEnd 触发两次 */
    isOnTouchCancel?: boolean;
};
export declare type UseTouchEventParams = UseTouchesOptions & UseTouchesParams;
/** 绑定手指触摸或鼠标事件 */
export default function useTouchEvent(options?: UseTouchEventParams): {
    onTouchFn: {
        onMouseUp?: ((e: MouseTouchEvent) => void) | undefined;
        onMouseDown: ((e: MouseTouchEvent) => void) | undefined;
    } | {
        onTouchCancel?: ((e: MouseTouchEvent) => void) | undefined;
        onTouchStart: ((e: MouseTouchEvent) => void) | undefined;
        onTouchMove: ((e: MouseTouchEvent, touchState?: TouchState | undefined) => void) | undefined;
        onTouchEnd: ((e: MouseTouchEvent) => void) | undefined;
    };
    info: TouchState;
    move: (event: import("../../utils/handleDom").TouchEventType | import("../../utils/handleDom").MouseTouchE) => void;
    start: (event: import("../../utils/handleDom").TouchEventType | import("../../utils/handleDom").MouseTouchE) => void;
    reset: () => void;
};
/** 处理鼠标或手指触摸事件 */
export declare const onTouchMouse: ({ onTouchStart, onTouchMove, onTouchEnd, isOnMouseUp, isOnTouchCancel, }: UseTouchesOptions & IsTouchEvent) => {
    onMouseUp?: ((e: MouseTouchEvent) => void) | undefined;
    onMouseDown: ((e: MouseTouchEvent) => void) | undefined;
} | {
    onTouchCancel?: ((e: MouseTouchEvent) => void) | undefined;
    onTouchStart: ((e: MouseTouchEvent) => void) | undefined;
    onTouchMove: ((e: MouseTouchEvent, touchState?: TouchState) => void) | undefined;
    onTouchEnd: ((e: MouseTouchEvent) => void) | undefined;
};
export {};
