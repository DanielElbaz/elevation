const numArr = [2, 18, -33, 45, 7, 19];


let sum=0;
for (const num of numArr){
    sum+=num;
}
console.log(sum);

const sum2= numArr.reduce(function(previous,current){
    return previous+current;
},0)

console.log(sum2);