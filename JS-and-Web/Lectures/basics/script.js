console.log("Hello Browser! ")

console.log(document.getElementById("myDiv"))

// css like selector -> returns the first element and only the first
console.log(document.querySelector("body > .pick-me"))

//returns an array of all selected elements
console.log(document.querySelectorAll(".pick-me"))
const myP = document.querySelector("#myP")

console.log(myP.innerHTML)

//updating element content
setTimeout(() => {
    myP.innerHTML = "<h1>Hello from javascript</h1>"
}, 2000);

//updating attirbut
setTimeout(() => {
    const myA = document.querySelector("#myA");
    myA.href = "https://www.walla.co.il"

}, 2000);


//updating inline style
setTimeout(() => {
    // myP.style.color="green"
    // myP.style.fontSize="35px"
    myP.style.cssText = "color: blue; font-size:49px;"
}, 2000);



//updating style using classe

setTimeout(() => {
    document.querySelector("#myDiv").classList.add("hide")
}, 4000);

setTimeout(() => {
    document.querySelector("#myDiv").classList.remove("hide")
}, 5000);


// setInterval(() => {
//     document.querySelector("#myDiv").classList.toggle("hide")
// }, 2000);

function showAlert() {
    alert("hello Daniel")
}

function changeP() {
    document.querySelector("#myP2").innerHTML = "Changed by function"
}

// Attaching an evennt handler to an Element
// Step 1 - Select the element that I want to attach the handler to (button)
// Step 2 - Attach the handler (function) to the element event

document.getElementById("btnHandler").addEventListener("click",() => {
    document.querySelector("#pHandler").innerHTML = "Changed by function"
})

