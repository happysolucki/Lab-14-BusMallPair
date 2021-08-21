/* global Product, Cart */

"use strict";

// Set up an empty cart for use on this page.
const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
const cart = new Cart(cartItems);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById("items");
  for (let i in Product.allProducts) {
    // loop through all the properties of the Product
    // store name of Product in allProducts array to productName
    let productName = Product.allProducts[i].name; // grab the product names from all the product indexes
    let option = document.createElement("option"); // created an option element inside of our HTML.
    console.log(productName); //debugger

    // set value & text of created option element to productName
    option.value = productName;
    option.textContent = productName;

    // append option element to dropdown
    selectElement.append(option); // all of our product names are inside of the option
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault(); // prevents the page from reloading

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: get the item picked from the select list
  let addItems = document.querySelector("#items");
  let quantityOfItems = document.querySelector("#quantity");

  // TODO: get the quantity
  let quantityValue = parseInt(quantityOfItems.value); //change the string to a number we can use

  // TODO: using those, add one item to the Cart
  cart.addItem(addItems.value, quantityValue); // adding the product and quantity of the product to the cart
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  // capture element responsible for showing item count
  let itemCount = document.querySelector("#itemCount"); // grab our HTML element to store on screen
  // make variable that'll hold sum of items
  let sumOfItems = 0;
  for (let i = 0; i < cart.items.length; i++) {
    // continuously add quantity of each cart item in cart.items array to sumOfItems
    sumOfItems += cart.items[i].quantity; // each time we add another item (or several items), the sum will increase
  }
  // update text of itemCount with total quantity of items
  if (sumOfItems === 0) itemCount.textContent = "";
  else itemCount.textContent = sumOfItems;
  // itemCount.textContent = sumOfItems;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  let cartContent = document.querySelector("#cartContents"); // located inside of our HTML div
  let addUpdateItems = document.querySelector("#items"); // located inside of our HTML div
  let addQuantityOfItems = document.querySelector("#quantity"); // located inside of our HTML div
  let itemName = document.createElement("h4"); // created an element for the name of the product

  // update the text inside of our header with submitted product name & value
  itemName.textContent = `${addUpdateItems.value} : ${addQuantityOfItems.value}`;

  // TODO: Add a new element to the cartContents div with that information
  cartContent.append(itemName); // our product and quantity was stored in itemName, now it is appended inside of our div!

  // Reset form when item is added
  catalogForm.reset();
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById("catalog");
catalogForm.addEventListener("submit", handleSubmit);
console.log(catalogForm);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
updateCounter();
