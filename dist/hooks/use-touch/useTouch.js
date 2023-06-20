import { useRef } from 'react';
var MIN_DISTANCE = 10;
function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }
  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }
  return '';
}
var useTouch = function useTouch() {
  var state = useRef({
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    offsetX: 0,
    offsetY: 0,
    direction: '',
    time: 0
  });
  /** 触摸开始时间 */
  var startTime = useRef(0);
  var setState = function setState(options) {
    Object.keys(options).forEach(function (_key) {
      var key = _key;
      state.current[key] = options[key];
    });
  };
  var reset = function reset() {
    setState({
      deltaX: 0,
      deltaY: 0,
      offsetX: 0,
      offsetY: 0,
      direction: ''
    });
  };
  var changeEvent = function changeEvent(event) {
    var _ref, _touches$, _touches, _changedTouches;
    // changedTouches 是 touchEnd 的值
    return (_ref = (_touches$ = event === null || event === void 0 ? void 0 : (_touches = event.touches) === null || _touches === void 0 ? void 0 : _touches[0]) !== null && _touches$ !== void 0 ? _touches$ : event === null || event === void 0 ? void 0 : (_changedTouches = event.changedTouches) === null || _changedTouches === void 0 ? void 0 : _changedTouches[0]) !== null && _ref !== void 0 ? _ref : event;
  };
  var start = function start(event) {
    reset();
    var touch = changeEvent(event);
    setState({
      startX: touch.clientX,
      startY: touch.clientY
    });
    startTime.current = Date.now();
  };
  var move = function move(event) {
    var touch = changeEvent(event);
    // Fix: Safari back will set clientX to negative number
    var _state$current = state.current,
      startX = _state$current.startX,
      startY = _state$current.startY,
      direction = _state$current.direction;
    var deltaX = touch.clientX < 0 ? 0 : touch.clientX - startX;
    var deltaY = touch.clientY - startY;
    var offsetX = Math.abs(deltaX);
    var offsetY = Math.abs(deltaY);
    var time = Date.now() - startTime.current;
    setState({
      deltaX: deltaX,
      deltaY: deltaY,
      offsetX: offsetX,
      offsetY: offsetY,
      time: time,
      direction: !direction ? getDirection(offsetX, offsetY) : ''
    });
  };
  return {
    info: state.current,
    move: move,
    start: start,
    reset: reset
  };
};
export default useTouch;