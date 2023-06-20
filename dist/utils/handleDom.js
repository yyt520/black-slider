import classNames from 'classnames';

/** 处理style的px */
export var handleStylePx = function handleStylePx(v) {
  return typeof v === 'number' ? v + 'px' : v;
};

/** 处理类名与需要判断的类名 */
export var classBem = function classBem(classnames, obj) {
  var str = classnames;
  if (obj) {
    Object.keys(obj).forEach(function (key) {
      str += ' ' + (obj[key] ? classnames + '-' + key : '');
    });
  }
  return str;
};

/** 处理style的需要判断的类名 */
export var classBemStyle = function classBemStyle(classname, styles, obj) {
  var arr = [styles[classname]];
  if (obj) {
    Object.keys(obj).forEach(function (key) {
      if (obj[key]) {
        arr.push(styles[classname + '-' + key]);
      }
    });
  }
  return classNames(arr);
};

/** 处理并合并类名 */
export var classMergeBem = function classMergeBem(classnames, arr) {
  var str = classnames;
  arr === null || arr === void 0 ? void 0 : arr.forEach(function (key) {
    str += ' ' + classnames + '-' + key;
  });
  return str;
};

/** 判断是移动端还是pc端 */
export var isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);

/** 鼠标事件 */
// export type MouseEventType = React.MouseEvent<HTMLDivElement, MouseEvent>;
// export type TouchEventType = React.TouchEvent<HTMLDivElement>

/** 处理鼠标或手指的事件 */
export var handleMouseOfTouch = function handleMouseOfTouch(e) {
  var target = !isMobile ? e : e.touches[0] || e.changedTouches[0];
  return {
    pageX: target.pageX,
    pageY: target.pageY,
    clientX: target.clientX,
    clientY: target.clientY,
    screenX: target.screenX,
    screenY: target.screenY
  };
};
/** 返回的类型 */

export var changeEvent = function changeEvent(event) {
  var _ref, _touches$, _touches, _changedTouches;
  // changedTouches 是 touchEnd 的值
  return (_ref = (_touches$ = event === null || event === void 0 ? void 0 : (_touches = event.touches) === null || _touches === void 0 ? void 0 : _touches[0]) !== null && _touches$ !== void 0 ? _touches$ : event === null || event === void 0 ? void 0 : (_changedTouches = event.changedTouches) === null || _changedTouches === void 0 ? void 0 : _changedTouches[0]) !== null && _ref !== void 0 ? _ref : event;
};