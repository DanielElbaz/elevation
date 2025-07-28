const { reject } = require("lodash");

// Simulated inventory database
const inventory = {
    'laptop': { price: 999, stock: 5 },
    'mouse': { price: 25, stock: 10 },
    'keyboard': { price: 75, stock: 0 }, // Out of stock
    'monitor': { price: 299, stock: 3 }
};

function checkInventory(items) {
    // TODO: Return a promise that:
    // 1. Waits 500ms (simulating database check)
    // 2. Checks if all items are in stock
    // 3. Resolves with items if all available
    // 4. Rejects with specific item that's out of stock
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i = 0; i < items.length; i++) {
                const itemName = items[i];
                const itemData = inventory[itemName];
                if (itemData.stock === 0) {
                    return reject(new Error("Out of stock: " + itemName));
                }
            }
            resolve(items);
        }, 500);
    })
}

function calculateTotal(items) {
    // TODO: Return a promise that:
    // 1. Waits 200ms
    // 2. Calculates total price including 8% tax
    // 3. Resolves with { subtotal, tax, total }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let subtotal = 0;
            for (let i = 0; i < items.length; i++) {
                subtotal += inventory[items[i]].price
            }
            let tax = subtotal * 0.08;
            let total = subtotal + tax;
            resolve({ subtotal, tax, total });

        }, 200);
    })
}

function processPayment(amount) {
    // TODO: Return a promise that:
    // 1. Waits 1500ms (simulating payment processing)
    // 2. 90% success rate
    // 3. Resolves with { transactionId, amount, status: 'success' }
    // 4. Rejects with payment failure error
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let chance = Math.random();

            if (chance > 0.1) {
                const transactionId = "tID" + Math.random().toString(16).slice(2, 10);
                resolve({ transactionId, amount, status: 'success' })
            }
            else {
                reject(new Error("Payment failure error"))
            }
        }, 1500);
    })
}

function updateInventory(items) {
    // TODO: Return a promise that:
    // 1. Waits 300ms
    // 2. Reduces stock for each item
    // 3. Resolves with updated inventory status
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i = 0; i < items.length; i++) {
                inventory[items[i]].stock -= 1
            }
            resolve(inventory)
        }, 300);
    })
}

// TODO: Create a complete checkout function that:
// 1. Takes an array of item names
// 2. Chains all the above functions
// 3. Returns a promise with the final order result
// 4. Handles all possible errors appropriately

function checkout(itemNames) {
    // TODO: Implement the complete checkout flow
    let totalsData;
    let paymentData;

    return checkInventory(itemNames)
        .then(items => calculateTotal(items))
        .then(totals => {
            totalsData = totals;
            return processPayment(totals.total);
        })
        .then(payment => {
            paymentData = payment;
            return updateInventory(itemNames);
        })
        .then(inventory => ({
            message: "Order completed",
            total: totalsData,
            payment: paymentData,
            inventory: inventory
        }))
        .catch(error => {
            throw error;
        });
}

//Test cases:
checkout(['laptop', 'mouse'])           // Should succeed
    .then(result => console.log('Order success:', result))
    .catch(error => console.log('Order failed:', error.message));

checkout(['laptop', 'keyboard'])        // Should fail - keyboard out of stock
    .then(result => console.log('Order success:', result))
    .catch(error => console.log('Order failed:', error.message));

checkout(['monitor', 'mouse', 'laptop']) // Might fail at payment (10% chance)
    .then(result => console.log('Order success:', result))
    .catch(error => console.log('Order failed:', error.message));



