function checkLuckyNumber(num) {
    // TODO: Create and return a promise that:
    // 1. Waits 800ms (use setTimeout)
    // 2. Resolves with "Lucky!" if number is divisible by 7
    // 3. Resolves with "Not lucky" for other positive numbers
    // 4. Rejects with Error("Invalid number") if number is negative or zero
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(num<=0){
                reject (new Error("Invalid number"))
            }
            if(num%7===0){
                resolve("Lucky!")
            }
            else resolve("Not Lucky!")
        }, 800);
    })

}

checkLuckyNumber(21)
.then(result=>console.log(result))
.catch(error => console.error(error.message));