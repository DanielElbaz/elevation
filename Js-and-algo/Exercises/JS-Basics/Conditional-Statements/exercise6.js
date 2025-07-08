let year = 100;
// Your conditional code here
// Examples: 2024 = leap, 1900 = not leap, 2000 = leap, 2023 = not leap
if (year % 4 === 0) {

    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log("It is a leap year")
        } 
        else { console.log("It is not a leap year") }
    } 
    else {
        console.log("It is a leap year")
    }
} 
else {
    console.log("It is not a leap year")
}