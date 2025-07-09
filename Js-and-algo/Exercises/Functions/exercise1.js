/* Exercise 1*/
console.log("Exercise 1:")
const isEven = function (num) {
    return num % 2 === 0;
}

console.log(isEven(6));

/* Exercise 2 */
console.log("Exercise 2:")

const numArray = [4, 18, -31, 57, 7, 12, 0, -11];
const newArr = [];

const oddNumbers = function (arr) {
    for (const num of arr) {
        if (!(isEven(num))) {
            newArr.push(num);
        }
    }
}
oddNumbers(numArray);

for (const item of newArr) {
    console.log(item);
}

/* Exercise 3 */
console.log("Exercise 3:");
const checkExists = function (arr, num) {
    for (const nums of arr) {
        if (nums === num) {
            return true;
        } return false;
    }
}
console.log(checkExists([1, 2, 3], 5));

/* Exercise 4 */
console.log("Exercise 4:");
let calculator = {
    add: function (a, b) { return a + b },
    substract: function (a, b) { return a - b },
}
const result1 = calculator.add(20, 1)
const result2 = calculator.substract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42

/* Exercise 5 */
console.log("Exercise 5:")
const turnToKing = function (name, money) {
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}
const increaseByNameLength = function (money, name) {
    return (money + (name.length - 1) * 100);
}
const makeRegal = function (name) {
    return "His Royal Highness, " + name;
};
turnToKing("martin luther", 100);

/* Exercise 6 */
console.log("Exercise 6");

const armstrongNumber = function (num) {
    const str = num.toString();
    const numDigits = str.length;
    const armstrongSum = str
        .split("")
        .reduce((accumulator, currentValue) => accumulator + Math.pow(Number(currentValue), numDigits), 0);
    return armstrongSum === num;
}

console.log(armstrongNumber(153)); 



