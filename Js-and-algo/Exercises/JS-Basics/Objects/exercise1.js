let p1={
    name:"Daniel Elbaz",
    age: 27,
    city:"Haifa"
};

let p2={
    name:"Yoav Uzan",
    age:27,
    city:"Beth Shemesh"
};

if(p1.age===p2.age){
    if(p1.city===p2.city){
        console.log("Daniel wanted to see Yoav");
    } else{
        console.log("Daniel wanted to see Yoav but couldn't");
    }
}else{console.log("They are not the same age")}