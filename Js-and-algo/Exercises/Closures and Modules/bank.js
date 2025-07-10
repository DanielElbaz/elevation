


const bankModule={
    money:500,
    depositCash: function(num){
         this.money+=num;
    },
    checkBalance: function(){
        return  this.money;
    }
}

const bank=function(){
    return bankModule;
}
module.exports=(bank);