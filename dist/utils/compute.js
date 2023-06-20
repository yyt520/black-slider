/** 用于比较num 最大和最小不能超过边界值 */
export function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

/** 初始化创建二维数组 */
export function createTwoArray(rowNum, colNum, cb) {
  return Array.from({
    length: rowNum
  }, function (_, i1) {
    return Array.from({
      length: colNum
    }, function (_, i2) {
      return cb(i1, i2);
    });
  });
}

/** 方向 1:左 2:上 3:右 4:下 0:不能移动 */

/** 检查可以移动的方向  */
export function checkDirectionVal(arr, row, col) {
  var _arr$row, _arr, _arr$row2, _arr2;
  if (!arr || !(arr !== null && arr !== void 0 && arr.length)) return 0;
  if (((_arr$row = arr[row]) === null || _arr$row === void 0 ? void 0 : _arr$row[col - 1]) === 0) return 1;else if (((_arr = arr[row - 1]) === null || _arr === void 0 ? void 0 : _arr[col]) === 0) return 2;else if (((_arr$row2 = arr[row]) === null || _arr$row2 === void 0 ? void 0 : _arr$row2[col + 1]) === 0) return 3;else if (((_arr2 = arr[row + 1]) === null || _arr2 === void 0 ? void 0 : _arr2[col]) === 0) return 4;
  return 0;
}
/** 检查xy的移动方向 */
export function checkDirectionXY(deltaX, deltaY) {
  var directionX = !deltaX ? 0 : deltaX > 0 ? 3 : 1;
  var directionY = !deltaY ? 0 : deltaY > 0 ? 4 : 2;
  return {
    directionX: directionX,
    directionY: directionY
  };
}