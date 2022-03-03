/* global - associative array to represent menu items & respective prices */
const menu = [];
menu["hotdogs"] = 4;
menu["fries"] = 3.50;
menu["soda"] = 1.50;
menu["sauerkraut"] = 1;

/* global - total order element */
const calculatedTotal = document.getElementById("calculated-amount");
/* global - final order element*/
const finalOrder = document.getElementById("ordered-items");
/* global - submit order btn */
const submitOrderBtn = document.getElementById("submit-order-btn");

/* global - final order array */
var order = [];

/* global - total order amount */
var total = 0;

window.onload = () => {

    submitOrderBtn.addEventListener("click", ()=>{
        calculateTotal();
        displayReceipt();

        // Debugging info
        console.log("Total Amount: " + total);
        console.log("******FINAL ORDER*******");
        for(food in order){
            console.log("Number of " + item + "ordered: " + order[food]);
        }
    });
}

// method to calculate final order
function calculateTotal(){
    for(item in menu){
        let amount = parseFloat(document.getElementById(item).value);

        if(!isNaN(amount)){
            // calculate price & add to total
            let price = menu[item];
            let subTotal = amount * price;
            total += subTotal;

            // add item & amount to final order
            order[item] = amount;
        }
    }
}

// method to display receipt
function displayReceipt(){
    let form = document.getElementById("form-container");
    form.style.display = "none";

    let receipt = document.getElementById("receipt");
    receipt.style.display = "inline";

    calculatedTotal.innerHTML = total;

    for(food in order){
        let foodDiv = document.createElement("div");
        foodDiv.innerHTML = food + " x " + order[food];
        finalOrder.appendChild(foodDiv);
    }
}