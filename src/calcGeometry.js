//this is calcArea and calcVolume combined

var finalVolume = require('./calcVolume')
var finalArea = require('./calcArea')
var calcGeometry = {
    finalVolume: finalVolume,
    finalArea: finalArea
}
module.exports = calcGeometry