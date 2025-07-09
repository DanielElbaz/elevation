const { forEach } = require("lodash");

console.log("Exercise 1");

const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!"
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub"
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power"
  }
]

const capitalize = function(str) {
  let capitalizedStr = ""
  capitalizedStr += str[0].toUpperCase()      // first letter, capitalized
  capitalizedStr += str.slice(1)              // rest of the string
  return capitalizedStr
}

const getSummary = function(person){
  let summary = ""
  summary += capitalize(person.name)
  summary += ` is a ${getAge(person.age)} ` //Yes - you can put a function call inside the tick quotes!
  summary += capitalize(person.profession)
  summary += ` from ${capitalize(person.city)},${capitalize(person.country)}. `
  summary += `${capitalize(person.name)} loves to say "${capitalize(person.catchphrase)}"`//call function for catchphrase
  return summary
}

const getAge=function(num){
    if(num<21){
        return "Underage"
    }else if(num>55){
        return "55+"
    }else{return num}
}
for (let person of people_info) {
  console.log(getSummary(person));
}
console.log("*******************");

/* Exercise 2 */
console.log("Exercise 2");

const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"', "?", "!", ";"]

const wordCounter = {}; 

const wordCounts = function(sentence){
  const cleanSentence = cleanText(sentence);
  const words = cleanSentence.split(" "); 

  for (let word of words){
    addToCounter(word);
  }
}

const addToCounter = function(word){
  wordCounter[word] = wordCounter[word] ? wordCounter[word] + 1 : 1;
}

const cleanText = function(sentence){
  const lower = sentence.toLowerCase();
  const cleaned = removeSpecialChars(lower);
  return cleaned;
}

const removeSpecialChars = function(sentence){
  for (let char of specialChars) {
    sentence = sentence.split(char).join("");
  }
  return sentence;
}

wordCounts(story)
console.log(wordCounter);



