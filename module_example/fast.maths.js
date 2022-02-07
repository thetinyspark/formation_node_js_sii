const { hypothenuse } = require("./hypothenuse");
const TO_RADIANS = Math.PI / 180;

function deg2rad(degree){
    return degree * Math.PI / 180;
}

module.exports = {
    deg2rad,
    TO_RADIANS, 
    hypothenuse
};