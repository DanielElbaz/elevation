//  *** Memory Considerations ***

let x=10;
let y=x;
console.log(y);     //10

y=20;
console.log(y);     //20
console.log(x);     //10

let person={
    fname:"Jhon",
    lname:"Doe",
    age:35
}

let person2=person1;
console.log(person2.age);       //35

person2.age=80;
console.log(person2.age);       //80
console.log(person1.age);       //80