/// <reference types="react" />
import './index.less';
import { ScrollCircleItem } from './scrollCircleItem';
declare const ScrollCircle: import("react").FC<import("./type").ScrollCircleProps> & {
    Item: import("react").FC<import("./type").ScrollCircleItemType>;
};
export type { ScrollCircleItemType, ScrollCircleProps } from './type';
export { ScrollCircle, ScrollCircleItem };
export default ScrollCircle;
