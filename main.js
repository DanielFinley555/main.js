//was not able to figure out the availability aspect of the assignment

//Task 1: Setup Product HTML Structure
//Done in index.html file



//Task 2: Add Event Listeners for Product Selection

//setting priceElement and sizeSelector variables
const priceElement = document.getElementById("product-price");
const sizeSelector = document.getElementById("size-selector");

//creating an event listener for whater size it is changed to
sizeSelector.addEventListener("change", (event) => {
    const selectedPrice = event.target.value;

//using textContent to fill in the string message
    priceElement.textContent = `$${selectedPrice}`
})



//Task 3: Handle Stock Availability

//create variables for either In Stock or Out of Stock, and for button
const inStock = document.getElementById("in-stock")
const outOfStock = document.getElementById("out-of-stock")

//disable purchase button if size is In Stock
outOfStock.addEventListener("change", () => {
    button.disabled = true;
})


//Task 4: Create a Checkout Event

//create variable for purchase
const purchase = document.getElementById("buy-the-shirt");

//create pop up alert message for both instock and out of stock
purchase.addEventListener("click", () => {
    if (document.getElementById("in-stock")) {
    alert("Success! You have purchased the Button Down Shirt.");
        } else { 
            alert("Size Out of Stock.")
    }
})
