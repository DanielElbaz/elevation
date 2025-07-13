// function twoSum(myArray, target) { // with two pointers technique
//     myArray.sort((a, b) => a - b);
//     let left = 0;
//     let right = myArray.length - 1;
//     while (left < right) {
//         if (myArray[left] + myArray[right] == target) {
//             return true;
//         }
//         myArray[left] + myArray[right] < target ? left++ : right--;
//     }
//     return false;
// }


// console.log(twoSum([68, 1, 5, 35, 15, 8, 64], 36))


function twoSumSet(myArray, target) {
    const arr = new Set();
    for (let num of myArray) {
        if (arr.has(target - num)) {
            return true;
        }
        arr.add(num);
    }
    return false;

}
console.log(twoSumSet([68, 1, 5, 35, 15, 8, 64], 36))

function printDuplicatesMap(myArray){
    const arr=new Set();
    myArray.for(element =>{})


}
