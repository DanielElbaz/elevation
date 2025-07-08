let usernameLength = 4;
let passwordLength = 2;
let userAge = 10;

// Your conditional code here
if (userAge>=13)
{
    if(usernameLength>=5&&passwordLength>=8){
        console.log("Ata baMaarekhet");
    }
    else if(usernameLength<5&&passwordLength>=8){
        console.log("Wrong Usernameeee");
    }
    else if(usernameLength>=5&&passwordLength<8){
        console.log("Wrong Passworddd");
    }
    else{
        console.log("Ata mistalbet");
    }

}else{console.log("Ata katan miday beima cheli")}