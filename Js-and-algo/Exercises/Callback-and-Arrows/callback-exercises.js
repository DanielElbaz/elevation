/* Exercise 1 */
console.log("Exercise 1")
const push = function () {
    console.log("pushing it!")
}

const pull = function () {
    console.log("pulling it!")
}

pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"

function pushPull(callback) {
    callback();
}

/* Exercise 2 */
console.log("Exercise 2")

const returnTime = function (time) {
    const time1 = new Date();
    console.log('The current time is: ' + time1)
}

const getTime = function (callback) {
    return callback();
}

getTime(returnTime);

/* Exercise 3 */
const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};
const logData=function(){
    return;
}
displayData(console.error, logData, "I like to party")


