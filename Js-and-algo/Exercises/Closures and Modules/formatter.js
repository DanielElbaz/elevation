

const capitalizeFirst = function (str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

const toSkewerCase = function (str) {
    return str.replaceAll(" ", "-")
}
const StringFormatter = function () {
    return {
        capitalizeFirst,
        toSkewerCase
    }
}

module.exports = (StringFormatter);