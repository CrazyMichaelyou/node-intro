


var divid = function(a,b)
{
    var result = a/b
    return result
}

var testBoolean = true
var testArray = ['hi',1,1]
var testString = 'hello'
var testNumber = 123

var toExport = {
    testFunction: divid,
    testBoolean: testBoolean,
    testArray: testArray,
    testString: testString,
    testNumber: testNumber
}
module.exports = toExport