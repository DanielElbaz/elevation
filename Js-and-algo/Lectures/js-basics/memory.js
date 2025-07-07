//  *** Memory Considerations ***

let x=10;
let y=x;
console.log(y);     //10

y=20;
console.log(y);     //20
console.log(x);     //10

let person1={
    fname:"Jhon",
    lname:"Doe",
    age:35,
    
}

let person2=person1;
console.log(person2.age);       //35

person2.age=80;
console.log(person2.age);       //80
console.log(person1.age);       //80

let person3={...person1};       // spread operator - shallow copy / clone without objects in objects
person3.age=39;                 // 

let person4= JSON.parse(JSON.stringify(person1)); // deep clone but we lose functions



let arr=[1,2,6];
console.log(arr[0]);            // first one
console.log(arr[arr.length-1]); // last one
arr.push(10);                   // push at the end

