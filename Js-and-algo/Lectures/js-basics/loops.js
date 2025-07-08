for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let numArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for (let i = numArray.length - 1; i >= 0; i--) {
    console.log(numArray[i]);
}

let x = 0;
while (x <= 10) {
    console.log(x);
    x++;
}

//for of loop
console.log("Using for of loop:");
for (const num of numArray) {
    console.log(num);
}

//for in loop
console.log("Using for in loop:");
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
for (const prop in person) {
    console.log(`${prop}: ${person[prop]}`);
}


// let array = [
// {name: "ant", color: "brown"},
// {name: "flower", color: "green"}
// ]  
// array.push({name:"ant",color:"green"});
// console.log(array[0].color);

let car = {wheels: 4}
car['color']="blue";

console.log(car);