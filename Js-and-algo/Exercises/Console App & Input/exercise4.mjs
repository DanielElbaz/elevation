import promptSync from "prompt-sync";
const prompt=promptSync();

let balance = 100;

while (true) {
  console.log("=== Banking System ===");
  console.log("1) Check Balance");
  console.log("2) Deposit Money");
  console.log("3) Withdraw Money");
  console.log("4) Exit");

  const choice = prompt("Choose option (1-4): ");

  if (choice === "1") {
    console.log(`\n Current Balance: $${balance}`);
  } 
  else if (choice === "2") {
    const amount = parseFloat(prompt("Enter amount to deposit: $"));
    if (isNaN(amount) || amount <= 0) {
      console.log("Please enter a valid number.");
    } else {
      balance += amount;
      console.log(`New Balance: $${balance}`);
    }
  } 
  else if (choice === "3") {
    const amount = parseFloat(prompt("Enter amount to withdraw: $"));
    if (isNaN(amount) || amount <= 0) {
      console.log("Please enter a valid number.");
    } else if (amount > balance) {
      console.log("You are poor.");
    } else {
      balance -= amount;
      console.log(`Ashreikha. New Balance: $${balance}`);
    }
  } 
  else if (choice === "4") {
    console.log("Thank you for using the banking system!");
    break;
  } 
  else {
    console.log("Invalid option. Please choose between 1 and 4.");
  }
}
