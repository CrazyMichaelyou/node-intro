var rectangle = function(a,b)
{
    var space = a*b
    return space
}


var triangle = function(a,b)
{
    var space = a*b/2
    return space
}


var circle = function(r)
{
    var space = 3.14*r*r
    return space
}

var calcArea = {
    circle: circle,
    rectangle: rectangle,
    triangle: triangle
}
module.exports = calcArea