let x = 5;
let y = '5';
if (x == y) {
    console.log('5=="5"')
}

if (x === y) {
    console.log('5==="5"')
} else {
    console.log('5!=="5"')
}

// always use === and !== in conditions over == and !=

let p1 = {
    fname: "Jhon",
    lname: "Doe",
    age: 35,

}

let p2 = p1;
if (p1 === p2) {
    //true
}

p2 = {
    fname: "Jhon",
    lname: "Doe",
    age: 35,
}

if (p1 === p2) {
    //false because of the address that is different
}


// FALSY values
// 0
// null
//undefined
// ""  (empty string)
// NaN (let x=10/'a') (Not A Number)

let str = "";
if (str) {

} else {
    // you will get here because "" is like false
}

// ? :
let w = x > 10 ? true : false;  // if x>10 -> w=true else w=false










