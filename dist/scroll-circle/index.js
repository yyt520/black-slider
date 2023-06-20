import { attachPropertiesToComponent } from "../utils/attach-properties-to-component";
import "./index.less";
import { ScrollCircle as _ScrollCircle } from "./scrollCircle";
import { ScrollCircleItem } from "./scrollCircleItem";
var ScrollCircle = attachPropertiesToComponent(_ScrollCircle, {
  Item: ScrollCircleItem
});
export { ScrollCircle, ScrollCircleItem };
export default ScrollCircle;