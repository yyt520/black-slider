import React from "react";
export var SliderPuzzleCtx = /*#__PURE__*/React.createContext({
  size: 3,
  initSpaceIndex: 0,
  grid: {
    w: 0,
    h: 0
  },
  gridArr: undefined,
  puzzleGridArr: undefined,
  letter: '',
  isReset: false,
  gap: 2,
  isGameMode: false,
  onChangeGrid: function onChangeGrid(p, preParams) {}
});