/**
 * 获取圆上一条直线两个点之间的角度(线的长度, 半径)
 */
export var getLineAngle = function getLineAngle(line, oblique) {
  return Math.asin(line / oblique) * 180 / Math.PI;
};