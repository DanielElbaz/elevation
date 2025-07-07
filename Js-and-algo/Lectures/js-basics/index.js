//'use strict' // undefined variables like y=10 wont work and we will have to define the type

console.log("Hello JS in Node")


//Primitives Variables

//Types
//number(3,3.4,-99.2)
//string("abf",'aaaa')
//boolean(true,false)
// 
// undefined

//Javascript - Loosely Typed (Dynamic Type)

let x;          //undefined  //with let on definit des variables
x = 5;          // number
x = "Hello";    // string
x=true;         // boolean

console.log(x);//true
console.log(typeof x); //boolean

//let, var , const
y=10;  // var y=10; its the same
console.log(y);


//var vs let
                                //always use let over var

//The main difference scope - var's scop is wider than let
console.log(z);          //undefined (not an error) because the var scope is big (scope = איפה המשתנה חי)
var z;                  // var lives in the whole file so it wont crush

console.log(w);         // Error because let lives just after he has been defined
let w=10;


// var vs let in blocks
if(true){
    var a =10;  // print 10
    let b=10; // error because he lives just in the block
}
console.log(a);
console.log(b);

// const
const myConst=10;
console.log(myConst);

myConst=10;                 // Error


x=null;                     // null is a value 
console.log(typeof x);      //Object

x=10;
x+='bla';
console.log(x);             // 10bla
console.log(typeof x);      // string but we wont code like that

//variables must start with letter or _ or $


//Object
let person = {
    fname: "John",
    lname: "Doe",
    age: 33,
    married: true,
    address:{
        street:"Dizengof",
        city:"Tel Aviv"
    },
    sayName: function(){
        console.log(`My name is ${this.fname} ${this.lname}`)
    },
}

//access prop/ket in object

console.log(person.age);
console.log(person.address.city);
console.log(person["age"]); // 1) we use that when the key is not a standard JS variable name
                            // 2) when the name of the prop i want to access is dynamic
let propName="age";
console.log(perosne[propName]); // 33

//changing or setting value 
person.age=35;

//adding a new key
person.weight=80;

//call the object function
person.sayName();













