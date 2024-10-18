//Task 1: Setup Product HTML Structure
//Done in index.html file



//Task 2: Add Event Listeners for Product Selection

//setting priceElement and sizeSelector
const priceElement = document.getElementById("product-price");
const sizeSelector = document.getElementById("size-selector");

//creating an event listener for whater size it is changed to
sizeSelector.addEventListener("change", (event) => {
    const selectedPrice = event.target.value;

//using textContent to fill in the string message
    priceElement.textContent = `$${selectedPrice}`
})
