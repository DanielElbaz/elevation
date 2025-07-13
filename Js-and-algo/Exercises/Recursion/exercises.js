console.log("Exercise 1:")
function findFactorial(num) {
    if (num === 1) {
        return 1
    }

    return num * findFactorial(num - 1);
}

console.log(findFactorial(5))
console.log(' ')



console.log('Exercise 2: ')
function reverseString(str){
    if(str.length<=1){
        return str;
    }
    return str[str.length-1]+reverseString(str.slice(0,-1))
}
console.log(reverseString("Daniel"))
console.log(' ')



console.log("Exercise 3:")
function swap(arr1,arr2){
    if(arr1.length===0){
        return;
    }
    const num=arr1.shift();
    arr2.push(num);
    swap (arr1,arr2);
}
const arr1 = [1, 2, 3]
const arr2 = []

swap(arr1,arr2);
console.log(arr1);
console.log(arr2);