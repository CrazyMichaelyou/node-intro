var volume = function(curentVolume,addVolume,minusVolume)
{
    var endVolume = curentVolume+addVolume-minusVolume
    return endVolume
}

module.exports = volume