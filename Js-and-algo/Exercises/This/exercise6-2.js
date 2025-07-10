/* Exercise 6-1 */
console.log("Exercise 6.1");

const coffeeShop = {
  beans: 40,
  money: 160,
  beanPrice: 0.5,

  drinkRequirements: {
    latte: {beanRequirement: 10, price: 5},
    americano: {beanRequirement: 6, price: 3},
    doubleShot: {beanRequirement: 14, price: 7},
    frenchPress: {beanRequirement: 12, price: 6}
  },

  makeDrink: function (drinkType) {

    if (this.drinkRequirements[drinkType] !== undefined) {
      if (this.beans >= this.drinkRequirements[drinkType].beanRequirement) {
        this.beans -= this.drinkRequirements[drinkType]
        console.log("Enjoy your " + drinkType)
      } else {
        console.log("Sorry, we are all out of beans")
      }

    } else {
      console.log("Sorry we don't make " + drinkType)
    }
  },
buyDrink: function (drinkType) { 
  
  if (this.drinkRequirements[drinkType]===undefined) {
    console.log("Sorry we don't sell " + drinkType);
    return;
  }

 
  if (this.makeDrink(drinkType)) {
    this.money += drink.price;
    console.log("You paid " + drink.price + ". We now have " + this.money + " money.");
  }
}
  
}
coffeeShop.buyDrink("latte");       
coffeeShop.buyDrink("filtered");    
coffeeShop.buyDrink("doubleShot");  



