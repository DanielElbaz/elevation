/*Exercise 1*/
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for (let i = 0; i < names.length; i++) {
   people.push({ name: names[i], age: ages[i] });
   console.log(people[i])
}
/* Exercise 2 */
for (let j = 0; j < names.length; j++) {
   console.log(`${names[j]} is ${ages[j]} years old`);
}
// Second way
for (person in people) {
   console.log(`${people[person].name} is ${people[person].age} years old`);
}
