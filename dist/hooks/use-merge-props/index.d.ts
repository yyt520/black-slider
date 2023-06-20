export declare type MergePropsOptions = {
    _ignorePropsFromGlobal?: boolean;
};
/** 将某些属性变为必选 */
declare type RequireKey<T, K extends keyof T> = Omit<T, K> & {
    [P in K]-?: T[P];
};
export default function useMergeProps<PropsType, K extends keyof PropsType>(componentProps: PropsType & MergePropsOptions, defaultProps: Partial<PropsType>, globalComponentConfig?: Partial<PropsType>): RequireKey<PropsType, K>;
export {};
