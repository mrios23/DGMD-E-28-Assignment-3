window.onload = () => {
    /* global - associative array to represent menu items & respective prices */
   
    const menu = [];
    menu["hotdogs"] = 4;
    menu["fries"] = 3.50;
    menu["soda"] = 1.50;
    menu["sauerkraut"] = 1;

    /* global - total order dollar amount */
    const calculatedTotal = document.getElementById("calculated-amount");
    /* global - final order */
    const finalOrder = document.getElementById("ordered-items");
    /* global - submit order btn */
    const submitOrderBtn = document.getElementById("submit-order-btn");

    submitOrderBtn.addEventListener("click", ()=>{

        let finalOrder = [];
        let total = 0;

        for(item in menu){
            let amount = parseFloat(document.getElementById(item).value);

            if(!isNaN(amount)){
                // calculate price & add to total
                let price = menu[item];
                let subTotal = amount * price;
                total += subTotal;

                // add item & amount to final order
                finalOrder[item] = amount;
            }
        }

        // Debugging info
        console.log("Total Amount: " + total);
        console.log("******FINAL ORDER*******");
        for(food in finalOrder){
            console.log("Number of " + item + "ordered: " + finalOrder[food]);
        }
    });
}