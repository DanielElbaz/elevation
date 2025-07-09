
/* Spot Check*/
const square = num => console.log(num * num);
square(4)

const getFormalTitle = (title, name) => title + " " + name
formalTitle = getFormalTitle("Madamme", "Lellouche")
console.log(formalTitle) //returns "Maddame Lellouche"
console.log("          ");

/*Exercise 4*/
console.log("Exercise 4")
const sum = (num1, num2, num3) => console.log(num1 + num2 + num3);
sum(4, 9, 13);
console.log("          ");

/* Exercise 5 */
console.log("Exercise 5");
const capitalize = str => str[0].toUpperCase()+ str.slice(1).toLowerCase();
   

console.log(capitalize("bOb")) // returns Bob
console.log(capitalize("TAYLOR") )// returns Taylor
console.log(capitalize("feliSHIA")) // returns Felishia
console.log("          ");

/*Exercise 6*/
console.log("Exercise 6");
const determineWeather = temp => {
  if(temp > 25){
    return "hot"
  }
  return "cold"
}
const commentOnWeather = temp1 => "it's "+ determineWeather(temp1);

console.log(commentOnWeather(30)) //returns "It's hot"
console.log(commentOnWeather(22)) //returns "It's cold"



