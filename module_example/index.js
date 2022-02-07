const {hypothenuse,TO_RADIANS, deg2rad} = require('./fast.maths');
let i = 1000000;

console.time("degree to radians");
while( --i > -1 ){
    hypothenuse(10,10);
}
console.timeEnd("degree to radians");