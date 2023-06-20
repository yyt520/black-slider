import React from 'react';
import type { CSSProperties, ReactElement } from 'react';
export declare type NativeProps<S extends string = never> = {
    /** 类名 */
    className?: string;
    /** style样式 */
    style?: CSSProperties & Partial<Record<S, string>>;
    /** children节点 */
    children?: React.ReactNode;
};
export declare function withNativeProps<P extends NativeProps>(props: P, element: ReactElement): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
