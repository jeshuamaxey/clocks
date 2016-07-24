// deprecated
// var NULL = [0,0,0,0];
// var VERT = [1,0,1,0];
// var HORI = [0,1,0,1];

// var TOP_RIGHT = [1,1,0,0];
// var BOTTOM_RIGHT = [0,1,1,0];
// var BOTTOM_LEFT = [0,0,1,1];
// var TOP_LEFT = [1,0,0,1];

var NULL = [7,35];
var VERT = [12,30];
var HORI = [3,45];

var TOP_RIGHT = [12,15];
var BOTTOM_RIGHT = [3,30];
var BOTTOM_LEFT = [6,45];
var TOP_LEFT = [12,45];

var ZERO = [
  // row one
  BOTTOM_RIGHT,
  HORI,
  HORI,
  BOTTOM_LEFT,
  // row two
  VERT,
  BOTTOM_RIGHT,
  BOTTOM_LEFT,
  VERT,
  // row three
  VERT,
  VERT,
  VERT,
  VERT,
  // row four
  VERT,
  VERT,
  VERT,
  VERT,
  // row five
  VERT,
  TOP_RIGHT,
  TOP_LEFT,
  VERT,
  // row six
  TOP_RIGHT,
  HORI,
  HORI,
  TOP_LEFT,
];

var ONE = [
  // row one
  BOTTOM_RIGHT,
  HORI,
  BOTTOM_LEFT,
  NULL,
  // row two
  TOP_RIGHT,
  BOTTOM_LEFT,
  VERT,
  NULL,
  // row three
  NULL,
  VERT,
  VERT,
  NULL,
  // row four
  NULL,
  VERT,
  VERT,
  NULL,
  // row five
  BOTTOM_RIGHT,
  TOP_LEFT,
  TOP_RIGHT,
  BOTTOM_LEFT,
  // row six
  TOP_RIGHT,
  HORI,
  HORI,
  TOP_LEFT,
];

var TWO = [
  // row one
  BOTTOM_RIGHT,
  HORI,
  HORI,
  BOTTOM_LEFT,
  // row two
  TOP_RIGHT,
  HORI,
  BOTTOM_LEFT,
  VERT,
  // row three
  BOTTOM_RIGHT,
  HORI,
  TOP_LEFT,
  VERT,
  // row four
  VERT,
  BOTTOM_RIGHT,
  HORI,
  TOP_LEFT,
  // row five
  VERT,
  TOP_RIGHT,
  HORI,
  BOTTOM_LEFT,
  // row six
  TOP_RIGHT,
  HORI,
  HORI,
  TOP_LEFT,
];

var THREE = [
  // row one
  BOTTOM_RIGHT,
  HORI,
  HORI,
  BOTTOM_LEFT,
  // row two
  TOP_RIGHT,
  HORI,
  BOTTOM_LEFT,
  VERT,
  // row three
  BOTTOM_RIGHT,
  HORI,
  TOP_LEFT,
  VERT,
  // row four
  TOP_RIGHT,
  HORI,
  BOTTOM_LEFT,
  VERT,
  // row five
  BOTTOM_RIGHT,
  HORI,
  TOP_LEFT,
  VERT,
  // row six
  TOP_RIGHT,
  HORI,
  HORI,
  TOP_LEFT,
];

var FOUR = [
  // row one
  BOTTOM_RIGHT,
  BOTTOM_LEFT,
  BOTTOM_RIGHT,
  BOTTOM_LEFT,
  // row two
  VERT,
  VERT,
  VERT,
  VERT,
  // row three
  VERT,
  TOP_RIGHT,
  TOP_LEFT,
  VERT,
  // row four
  TOP_RIGHT,
  HORI,
  BOTTOM_LEFT,
  VERT,
  // row five
  NULL,
  NULL,
  VERT,
  VERT,
  // row six
  NULL,
  NULL,
  TOP_RIGHT,
  TOP_LEFT,
];

var FIVE = [
  // row one
  BOTTOM_RIGHT,
  HORI,
  HORI,
  BOTTOM_LEFT,
  // row two
  VERT,
  BOTTOM_RIGHT,
  HORI,
  TOP_LEFT,
  // row three
  VERT,
  TOP_RIGHT,
  HORI,
  BOTTOM_LEFT,
  // row four
  TOP_RIGHT,
  HORI,
  BOTTOM_LEFT,
  VERT,
  // row five
  BOTTOM_RIGHT,
  HORI,
  TOP_LEFT,
  VERT,
  // row six
  TOP_RIGHT,
  HORI,
  HORI,
  TOP_LEFT,
];

var SIX = [
  // row one
  BOTTOM_RIGHT,
  HORI,
  HORI,
  BOTTOM_LEFT,
  // row two
  VERT,
  BOTTOM_RIGHT,
  HORI,
  TOP_LEFT,
  // row three
  VERT,
  TOP_RIGHT,
  HORI,
  BOTTOM_LEFT,
  // row four
  VERT,
  BOTTOM_RIGHT,
  BOTTOM_LEFT,
  VERT,
  // row five
  VERT,
  TOP_RIGHT,
  TOP_LEFT,
  VERT,
  // row six
  TOP_RIGHT,
  HORI,
  HORI,
  TOP_LEFT,
];

var SEVEN = [
  // row one
  BOTTOM_RIGHT,
  HORI,
  HORI,
  BOTTOM_LEFT,
  // row two
  TOP_RIGHT,
  HORI,
  BOTTOM_LEFT,
  VERT,
  // row three
  NULL,
  NULL,
  VERT,
  VERT,
  // row four
  NULL,
  NULL,
  VERT,
  VERT,
  // row five
  NULL,
  NULL,
  VERT,
  VERT,
  // row six
  NULL,
  NULL,
  TOP_RIGHT,
  TOP_LEFT,
];

var EIGHT = [
  // row one
  BOTTOM_RIGHT,
  HORI,
  HORI,
  BOTTOM_LEFT,
  // row two
  VERT,
  BOTTOM_RIGHT,
  BOTTOM_LEFT,
  VERT,
  // row three
  VERT,
  TOP_RIGHT,
  TOP_LEFT,
  VERT,
  // row four
  VERT,
  BOTTOM_RIGHT,
  BOTTOM_LEFT,
  VERT,
  // row five
  VERT,
  TOP_RIGHT,
  TOP_LEFT,
  VERT,
  // row six
  TOP_RIGHT,
  HORI,
  HORI,
  TOP_LEFT,
];

var NINE = [
  // row one
  BOTTOM_RIGHT,
  HORI,
  HORI,
  BOTTOM_LEFT,
  // row two
  VERT,
  BOTTOM_RIGHT,
  BOTTOM_LEFT,
  VERT,
  // row three
  VERT,
  TOP_RIGHT,
  TOP_LEFT,
  VERT,
  // row four
  TOP_RIGHT,
  HORI,
  BOTTOM_LEFT,
  VERT,
  // row five
  BOTTOM_RIGHT,
  HORI,
  TOP_LEFT,
  VERT,
  // row six
  TOP_RIGHT,
  HORI,
  HORI,
  TOP_LEFT,
];

var NUMERALS = [
  ZERO,
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE
];