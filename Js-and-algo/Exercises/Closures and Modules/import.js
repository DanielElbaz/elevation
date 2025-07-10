const math = require('./index.js');
const formatter1 = require("./formatter.js")
const bank1 = require("./bank.js")



console.log("Spot Check")
const allFunctions = math.mathOperations();
console.log(allFunctions.add(5, 7))
console.log(" ");


console.log("Exercise 1")
const formatter = formatter1();

console.log(formatter.capitalizeFirst("dorothy")) //should return Dorothy
console.log(formatter.toSkewerCase("blue box")) //should return blue-box
console.log(" ");

/* Exercise 2 */
console.log("Exercise 2")
const bank2 = bank1();
bank2.depositCash(200);
bank2.depositCash(250);
console.log(bank2.checkBalance());
console.log(" ")


/* Exercise 3 */
console.log("Exercise 3")
const SongsManager1 = require('./songsManager.js')
const songsManager = SongsManager1()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ

