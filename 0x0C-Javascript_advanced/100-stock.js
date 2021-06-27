
const stock = {
    macbook: 2,
    iphone: 4,
}

const processPayment = (itemName) => {
    if (stock[itemName.toLowerCase()] && stock[itemName.toLowerCase()] > 0) {
        stock[itemName.toLowerCase()] -= 1;
        console.log(`Payment is being processed for item ${itemName}`);
    }
};

const processError = (itemName) => {
    console.log(`No more ${itemName} in stock`);
    console.log(`Payment is not being processed`);
};

const processOrder = (itemName, callbackPayment, callbackError) => {
    console.log(`Verifying the stock of ${itemName}`);
    if (stock[itemName.toLowerCase()]) {
        callbackPayment(itemName);
    }
    else {
        callbackError(itemName);
    }
}

let itemName = prompt("Please enter the item you would like to purchase (Macbook, iPhone)");

processOrder(itemName, processPayment, processError);
