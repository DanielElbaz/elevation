

// const printHello=function(){

// }

function printHello() {
    console.log("Hello");

    // all function return value
    // by default undefined is returned
    // return undefined;
}

console.log(printHello());     // invoking the function and sending the RESULT to log
console.log(printHello);      // here we are sending the function printHello to log without invoking it

function printName(fname, lname) {
    let greeting = `Hello ${fname} ${lname}`;
    console.log(greeting);

    console.log(arguments);
    if (arguments.length > 2) {
        console.log("and my age is " + arguments[2]);
    }
}

printName("John", "Doe");

let a = "Sarah";
let b = "Doe";
printName(a, b);

printName("John");      // Hello John undefined

printName("John", "Doe", 33);

// Function Overload
// function createDate(day, month, year) {...}
// function createDate(milliseconds){...}
// function createDate(string) {...} // "YYYY-DD-MM"

function createDate() {
    if (arguments.length === 1 && typeof arguments[0] === 'number') {
        let milliseconds = arguments[0];
    } else if (arguments.length === 1 && typeof arguments[0] === 'string') {
        let stringFormat = arguments[0];
    } else if (arguments.length === 3 && typeof arguments[0] === 'number'
        && typeof arguments[1] === 'number'
        && typeof arguments[2] === 'number') {
            let day = arguments[0];
            let month = arguments[1];
            let year = arguments[2];
       
    }
}

function getFullName(fname, lname) {
    return fname + " " + lname;
}

let myName = getFullName();
//Given the following code: 
ages=[0, 17, 2, 4, 31, 3] 
let x = ages[3] + 20; //
// assuming the array ages looks like this: [0, 17, 2, 4, 31, 3], what will x be?
console.log(x);
