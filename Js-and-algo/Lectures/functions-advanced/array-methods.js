console.log("Sort example");
const array=[0,3,-14,35,10,0,555];
array.sort(function(a,b){
    return a-b;
})
console.log(array);

//people array
let p1={
    name:"Daniel Elbaz",
    age: 27,
    city:"Haifa"
}

let p2={
    name:"Jane Doe",
    age: 43,
    city:"Los Angeles"
}

let p3={
    name:"John Smith",
    age: 30,
    city:"Chicago"
}

const people=[p1,p2,p3];
//sort people by age
people.sort(function(a,b){
    return a.age-b.age;
})
console.log(people);

//for each example
people.forEach(function(person){
    console.log(`${person.name} is ${person.age} years old and lives in ${person.city}.`);
});


//map
// Creating a new array that is a manipulation of another array
//

const nameArr=[];
for (const person of people){
    nameArr.push(person.name);
}
console.log(nameArr);

const nameArr2=people.map(function(person){
    return person.name;
})
console.log(nameArr2);


//Filter
// Creates a new array which is filtered based on a rule

// without filter
const evenArr=[];
for(const num of array){
    if(num%2===0){
        evenArr.push(num);
    }
}
console.log(evenArr);

//with filter
const evenArr2= array.filter(function(num){
    return num%2===0;
})
console.log(evenArr2);



// Chaining methods

// create a name array of people older than 40
const oldNames=people.filter(function(person){
    return person.age>40
}).map(function(person){
    return person.name;
});
console.log(oldNames);


