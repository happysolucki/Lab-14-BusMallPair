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
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tableBody = document.querySelector("tbody");
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
    let tableRow = document.createElement("tr");
    let deleteLink = document.createElement("td");
    let quantity = document.createElement("td");
    let itemName = document.createElement("td");

    deleteLink.id = "delete";

    deleteLink.textContent = "x";
    quantity.textContent = cart.items[i].quantity;
    itemName.textContent = cart.items[i].product;

    tableRow.append(deleteLink, quantity, itemName);
    tableBody.append(tableRow);
  }
}

function removeItemFromCart(event) {
  console.log(event);
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  if (event.target.id === "delete") {
  }
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
