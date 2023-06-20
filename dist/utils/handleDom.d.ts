import type { MouseEvent } from 'react';
/** 处理style的px */
export declare const handleStylePx: (v: number | string) => string;
/** 处理类名与需要判断的类名 */
export declare const classBem: (classnames: string, obj?: {
    [x: string]: boolean | undefined;
} | undefined) => string;
/** 处理style的需要判断的类名 */
export declare const classBemStyle: (classname: string, styles: any, obj?: {
    [x: string]: boolean | undefined;
} | undefined) => string;
/** 处理并合并类名 */
export declare const classMergeBem: (classnames: string, arr?: string[]) => string;
/** 判断是移动端还是pc端 */
export declare const isMobile: RegExpMatchArray | null;
/** 鼠标事件 */
export declare type MouseEventType = MouseEvent | globalThis.MouseEvent;
export declare type TouchEventType = React.TouchEvent<HTMLDivElement>;
/** 鼠标或手指事件 */
export declare type MouseTouchEvent = MouseEventType | TouchEventType;
/** 处理鼠标或手指的事件 */
export declare const handleMouseOfTouch: (e: MouseTouchEvent) => {
    pageX: number;
    pageY: number;
    clientX: number;
    clientY: number;
    screenX: number;
    screenY: number;
};
/** 返回的类型 */
export declare type MouseTouchE = {
    pageX: number;
    pageY: number;
    clientX: number;
    clientY: number;
    screenX: number;
    screenY: number;
};
export declare const changeEvent: (event: MouseEvent | TouchEvent) => Touch;
