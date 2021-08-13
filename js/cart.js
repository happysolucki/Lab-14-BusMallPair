/* global Cart */
"use strict";

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById("cart");
table.addEventListener("click", removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
  updateCounter();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  // capture table body
  let tableBody = document.querySelector("tbody");

  // empty everything within table body
  tableBody.innerHTML = "";
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  let tableBody = document.querySelector("tbody");

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

  for (let i = 0; i < cart.items.length; i++) {
    // create necessary tr and td elements
    let tableRow = document.createElement("tr");
    let deleteLink = document.createElement("td");
    let quantity = document.createElement("td");
    let itemName = document.createElement("td");

    // give td elements unique ids so they're easier to capture in removeItemFromCart function
    deleteLink.id = "delete";
    quantity.id = "item-quantity";
    itemName.id = "item-name";

    // set text of td elements appropriately
    deleteLink.textContent = "x";
    quantity.textContent = cart.items[i].quantity;
    itemName.textContent = cart.items[i].product;

    // append tds to tr
    tableRow.append(deleteLink, quantity, itemName);

    // append tr to table body
    tableBody.append(tableRow);
  }
}

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
}

function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  // checks to see if user click on 'x' to remove a specific item
  if (event.target.id === "delete") {
    // capture parent element of x that was clicked
    let currentRow = event.target.parentElement;
    // capture td responsible for item name within the same row
    let currentItemName = currentRow.querySelector("#item-name").textContent;
    console.log(currentItemName);
    // declare boolean that asks user if they really want to delete item
    let isDeleting = confirm("Do you really want to remove this item?");
    // if user confirms deletion, remove item from cart, clear the cart, then show updated cart
    if (isDeleting) {
      cart.removeItem(currentItemName);
      // clearCart();
      // showCart();
      renderCart();
    }
  }
}

// This will initialize the page and draw the cart on screen
renderCart();
