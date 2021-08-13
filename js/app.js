"use strict";

// class Cart {
//   constructor(items) {
//     this.items = items;
//   }
//   addItem(product, quantity) {
//     let newItem = new CartItem(product, quantity); // We are creating a new cart item
//     this.items.push(newItem); // pushing our data inside of the items
//     console.log(this.items); // debugger
//   }
//   removeItem(item) {
//     // TODO: Fill in this instance method to remove one item from the cart.
//     // Note: You will have to decide what kind of parameter to pass in here!
//     for (let i = 0; i < this.items.length; i++) {
//       if (this.items[i].product === item) {
//         this.items.splice(i, 1); // deletes an index from the array
//       }
//     }
//     this.saveToLocalStorage();
//   }
//   saveToLocalStorage() {
//     const arrayItemsString = JSON.stringify(this.items); // turning the array into a string
//     localStorage.setItem("cart", arrayItemsString); // setting our new string inside of the local storage.
//   }
// }

// Cart constructor.
const Cart = function (items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};

Cart.prototype.addItem = function (product, quantity) {
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items
  let newItem = new CartItem(product, quantity); // We are creating a new cart item
  this.items.push(newItem); // pushing our data inside of the items
  console.log(this.items); // debugger
};

Cart.prototype.saveToLocalStorage = function () {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
  const arrayItemsString = JSON.stringify(this.items); // turning the array into a string
  localStorage.setItem("cart", arrayItemsString); // setting our new string inside of the local storage.
};

Cart.prototype.removeItem = function (item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!
  for (let i = 0; i < this.items.length; i++) {
    if (this.items[i].product === item) {
      this.items.splice(i, 1); // deletes an index from the array
    }
  }
  // update local storage after removal
  this.saveToLocalStorage();
};

const CartItem = function (product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

// Product contructor.
const Product = function (filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  new Product("assets/bag.jpg", "Bag");
  new Product("assets/banana.jpg", "Banana");
  new Product("assets/bathroom.jpg", "Bathroom");
  new Product("assets/boots.jpg", "Boots");
  new Product("assets/breakfast.jpg", "Breakfast");
  new Product("assets/bubblegum.jpg", "Bubblegum");
  new Product("assets/chair.jpg", "Chair");
  new Product("assets/cthulhu.jpg", "Cthulhu");
  new Product("assets/dog-duck.jpg", "Dog-Duck");
  new Product("assets/dragon.jpg", "Dragon");
  new Product("assets/pen.jpg", "Pen");
  new Product("assets/pet-sweep.jpg", "Pet Sweep");
  new Product("assets/scissors.jpg", "Scissors");
  new Product("assets/shark.jpg", "Shark");
  new Product("assets/sweep.png", "Sweep");
  new Product("assets/tauntaun.jpg", "Taun-Taun");
  new Product("assets/unicorn.jpg", "Unicorn");
  new Product("assets/water-can.jpg", "Water Can");
  new Product("assets/wine-glass.jpg", "Wine Glass");
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();
