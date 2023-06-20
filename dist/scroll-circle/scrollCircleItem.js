import React, { useContext, useMemo } from "react";
import { ScrollCircleCtx } from "./context";
var classPrefix = 'blackui-scroll-circle';
export var ScrollCircleItem = function ScrollCircleItem(_ref) {
  var index = _ref.index,
    _onClick = _ref.onClick,
    children = _ref.children;
  var _useContext = useContext(ScrollCircleCtx),
    circleR = _useContext.circleR,
    cardDeg = _useContext.cardDeg,
    isVertical = _useContext.isVertical,
    isClockwise = _useContext.isClockwise,
    isClick = _useContext.isClick;
  var cardStyle = useMemo(function () {
    var initDeg = isVertical ? 90 : 0;
    var deg = initDeg + cardDeg * index;
    var n = isClockwise ? -1 : 1;
    n *= isVertical ? -1 : 1;
    var top = circleR * (1 - Math.cos(deg * Math.PI / 180));
    var left = circleR * (1 - n * Math.sin(deg * Math.PI / 180));
    var rotate = initDeg - n * deg;
    return {
      top: "".concat(top, "px"),
      left: "".concat(left, "px"),
      transform: "translate(-50%, -50%) rotate(".concat(rotate, "deg)")
    };
  }, [circleR, cardDeg, isVertical, isClockwise]);
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(classPrefix, "-cardWrap"),
    style: cardStyle,
    onClick: function onClick() {
      isClick && (_onClick === null || _onClick === void 0 ? void 0 : _onClick(index));
    }
  }, children);
};