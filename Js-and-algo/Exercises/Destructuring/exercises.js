var firstPiece = { id: 101, name: 'Ofri' }

var seoncdPiece = { country: 'Israel' }

var passport = { ...firstPiece, ...seoncdPiece };
console.log(passport)


let employeesArr = [
    { name: "Joey", id: 1, age: 26 },
    { name: "Lily", id: null, age: 24 },
    { name: "Alice", id: 7, age: null },
    { name: "Sam", id: 8, age: 24 },
    { name: "Ray", id: null, age: null }
]

for (let employe of employeesArr) {
    if ((employe.id ?? null) === null || (employe.age ?? null) === null) {
        console.log(`${employe.name} has missing data`);
    }
}
