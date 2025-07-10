
const mathOperations = function () {
    const add = function (x, y) {
        return x + y;
    }

    const subtract = function (x, y) {
        return x - y;
    }

    const multiply = function (x, y) {
        return x * y;
    }

    const divide = function (x, y) {
        return x / y;
    }
   return {
    add: add,
    sub: subtract,
    mult: multiply,
    div: divide
}

}

module.exports= {mathOperations}
