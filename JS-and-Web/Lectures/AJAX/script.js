fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => document.getElementById("joke").innerHTML = `${data.setup} ${data.punchline}`)

async function processOrder(orderId) {
    const response = await fetch(`/api/orders/${orderId}`);
    const order = await response.json();
    const response_1 = await fetch(`/api/inventory/${order.productId}`);
    const inventory = await response_1.json();
    if (inventory.stock > 0) {
        return { success: true, message: 'Order processed' };
    } else {
        return { success: false, message: 'Out of stock' };
    }
}



function processOrder(orderId) {
    return fetch(`/api/orders/${orderId}`)
        .then(response => response.json())
        .then(order => {
            return fetch(`/api/inventory/${order.productId}`);
        })
        .then(response => response.json())
        .then(inventory => {
            if (inventory.stock > 0) {
                return { success: true, message: 'Order processed' };
            } else {
                return { success: false, message: 'Out of stock' };
            }
        });
}