/* Exercise 6-1 */
console.log("Exercise 6.1");

const coffeeShop = {
  beans: 40,
  money: 160,
  beanPrice: 2,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {

    if (this.drinkRequirements[drinkType] !== undefined) {
      if (this.beans >= this.drinkRequirements[drinkType]) {
        this.beans -= this.drinkRequirements[drinkType]
        console.log("Enjoy your " + drinkType + "! You have still " + this.beans + " beans")
      } else {
        console.log("Sorry, we are all out of beans")
      }

    } else {
      console.log("Sorry we don't make " + drinkType)
    }
  },

  buyBeans: function (numBeans) {
    numBeans * this.beanPrice <= this.money ? (this.beans += numBeans,
      this.money -= numBeans * this.beanPrice,
      console.log("You have now " + this.beans + " beans"))
      : console.log("You don't have enough money")
  }
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"
coffeeShop.buyBeans(60);
coffeeShop.makeDrink("frenchPress");
coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("frenchPress");