var NULL = [0,0,0,0];
var VERT = [1,0,1,0];
var HORI = [0,1,0,1];

var ZERO = [
  // row one
  [0,1,1,0],
  HORI,
  HORI,
  [0,0,1,1],
  // row two
  VERT,
  [0,1,1,0],
  [0,0,1,1],
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
  [1,1,0,0],
  [1,0,0,1],
  VERT,
  // row six
  [1,1,0,0],
  HORI,
  HORI,
  [1,0,0,1],
];

var ONE = [
  // row one
  [0,1,1,0],
  HORI,
  [0,0,1,1],
  [0,0,0,0],
  // row two
  [1,1,0,0],
  [0,0,1,1],
  VERT,
  [0,0,0,0],
  // row three
  [0,0,0,0],
  VERT,
  VERT,
  [0,0,0,0],
  // row four
  [0,0,0,0],
  VERT,
  VERT,
  [0,0,0,0],
  // row five
  [0,1,1,0],
  [1,0,0,1],
  [1,1,0,0],
  [0,0,1,1],
  // row six
  [1,1,0,0],
  HORI,
  HORI,
  [1,0,0,1],
];

var TWO = [
  // row one
  [0,1,1,0],
  HORI,
  HORI,
  [0,0,1,1],
  // row two
  [1,1,0,0],
  HORI,
  [0,0,1,1],
  VERT,
  // row three
  [0,1,1,0],
  HORI,
  [1,0,0,1],
  VERT,
  // row four
  VERT,
  [0,1,1,0],
  HORI,
  [1,0,0,1],
  // row five
  VERT,
  [1,1,0,0],
  HORI,
  [0,0,1,1],
  // row six
  [1,1,0,0],
  HORI,
  HORI,
  [1,0,0,1],
];

var THREE = [
  // row one
  [0,1,1,0],
  HORI,
  HORI,
  [0,0,1,1],
  // row two
  [1,1,0,0],
  HORI,
  [0,0,1,1],
  VERT,
  // row three
  [0,1,1,0],
  HORI,
  [1,0,0,1],
  VERT,
  // row four
  [1,1,0,0],
  HORI,
  [0,0,1,1],
  VERT,
  // row five
  [0,1,1,0],
  HORI,
  [1,0,0,1],
  VERT,
  // row six
  [1,1,0,0],
  HORI,
  HORI,
  [1,0,0,1],
];

var FOUR = [
  // row one
  [0,1,1,0],
  [0,0,1,1],
  [0,1,1,0],
  [0,0,1,1],
  // row two
  VERT,
  VERT,
  VERT,
  VERT,
  // row three
  VERT,
  [1,1,0,0],
  [1,0,0,1],
  VERT,
  // row four
  [1,1,0,0],
  HORI,
  [0,0,1,1],
  VERT,
  // row five
  [0,0,0,0],
  [0,0,0,0],
  VERT,
  VERT,
  // row six
  [0,0,0,0],
  [0,0,0,0],
  [1,1,0,0],
  [1,0,0,1],
];

var FIVE = [
  // row one
  [0,1,1,0],
  HORI,
  HORI,
  [0,0,1,1],
  // row two
  VERT,
  [0,1,1,0],
  HORI,
  [1,0,0,1],
  // row three
  VERT,
  [1,1,0,0],
  HORI,
  [0,0,1,1],
  // row four
  [1,1,0,0],
  HORI,
  [0,0,1,1],
  VERT,
  // row five
  [0,1,1,0],
  HORI,
  [1,0,0,1],
  VERT,
  // row six
  [1,1,0,0],
  HORI,
  HORI,
  [1,0,0,1],
];

var SIX = [
  // row one
  [0,1,1,0],
  HORI,
  HORI,
  [0,0,1,1],
  // row two
  VERT,
  [0,1,1,0],
  HORI,
  [1,0,0,1],
  // row three
  VERT,
  [1,1,0,0],
  HORI,
  [0,0,1,1],
  // row four
  VERT,
  [0,1,1,0],
  [0,0,1,1],
  VERT,
  // row five
  VERT,
  [1,1,0,0],
  [1,0,0,1],
  VERT,
  // row six
  [1,1,0,0],
  HORI,
  HORI,
  [1,0,0,1],
];

var SEVEN = [
  // row one
  [0,1,1,0],
  HORI,
  HORI,
  [0,0,1,1],
  // row two
  [1,1,0,0],
  HORI,
  [0,0,1,1],
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
  [1,1,0,0],
  [1,0,0,1],
];

var EIGHT = [
  // row one
  [0,1,1,0],
  HORI,
  HORI,
  [0,0,1,1],
  // row two
  VERT,
  [0,1,1,0],
  [0,0,1,1],
  VERT,
  // row three
  VERT,
  [1,1,0,0],
  [1,0,0,1],
  VERT,
  // row four
  VERT,
  [0,1,1,0],
  [0,0,1,1],
  VERT,
  // row five
  VERT,
  [1,1,0,0],
  [1,0,0,1],
  VERT,
  // row six
  [1,1,0,0],
  HORI,
  HORI,
  [1,0,0,1],
];

var NINE = [
  // row one
  [0,1,1,0],
  HORI,
  HORI,
  [0,0,1,1],
  // row two
  VERT,
  [0,1,1,0],
  [0,0,1,1],
  VERT,
  // row three
  VERT,
  [1,1,0,0],
  [1,0,0,1],
  VERT,
  // row four
  [1,1,0,0],
  HORI,
  [0,0,1,1],
  VERT,
  // row five
  [0,1,1,0],
  HORI,
  [1,0,0,1],
  VERT,
  // row six
  [1,1,0,0],
  HORI,
  HORI,
  [1,0,0,1],
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