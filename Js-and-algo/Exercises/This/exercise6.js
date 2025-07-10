/* Exercise 6 */
console.log("Exercise 6");

const coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    // TODO: Finish this method
    if(this.drinkRequirements[drinkType] !== undefined){
        if(this.beans>=this.drinkRequirements[drinkType]){
            this.beans-=this.drinkRequirements[drinkType]
            console.log("Enjoy your " + drinkType)
        }else{
            console.log("Sorry, we are all out of beans")
        }

    }else{
        console.log("Sorry we don't make " + drinkType)
    }
  }
}

coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"
