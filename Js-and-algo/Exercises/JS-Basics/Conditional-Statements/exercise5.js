let customerType = "premium";
let purchaseAmount = 150;
let dayOfWeek = 4; // 0 = Sunday, 1 = Monday, etc.
// Your conditional code here
let discount = 0;
if (customerType === "VIP") {
    console.log(`The discount amount is ${discount = purchaseAmount * 0.2}$`); //20%

} else if (customerType === "premium") {
    if ((dayOfWeek == 0) || (dayOfWeek == 6)) {
        console.log(`The discount amount is ${discount = purchaseAmount * 0.15}$`);//15% on weekend

    } else {
        console.log(`The discount amount is ${discount = purchaseAmount * 0.1}$`); //10% during the rest of the week

    }
} else if (customerType === "regular") {
    if (purchaseAmount > 100) {
        console.log(`The discount amount is ${discount = purchaseAmount * 0.1}$`); //10% for amount >100
    } else if (purchaseAmount > 50) {
        console.log(`The discount amount is ${discount = purchaseAmount * 0.05}$`) //5% for amount >50
    } else {
        console.log("You dont deserve a discount"); // amount < 50
    }
}

/* with ternery operators */
customerType === "premium"
  ? ((dayOfWeek === 0) || (dayOfWeek == 6)
      ? console.log(discount = purchaseAmount * 0.15)
      : console.log(discount = purchaseAmount * 0.1)) : console.log(0)
