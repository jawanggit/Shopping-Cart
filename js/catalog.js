/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  var option = document.createElement("option");
  option.textContent = "Please choose an Item";
  option.value = "choose";
  selectElement.append(option);
  for (var i in Product.allProducts) {
    var option = document.createElement("option");  
    option.textContent = Product.allProducts[i].name;
    option.value = Product.allProducts[i].name;
    selectElement.append(option);
  }  

  
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  console.log(event)
  // TODO: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
    console.log(event.srcElement[1].value)
    for (var i in Product.allProducts){
      if (event.srcElement[1].value){
        console.log('found you');
        var pickedProduct = event.target.select.option[i].value;
      }
    }
  var pickedProduct = "Bag";
  // TODO: get the quantity

  var enteredQuantity = 1;
  // TODO: using those, add one item to the Cart

  Cart.prototype.addItem(pickedProduct,enteredQuantity);
  
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  var count = Cart.length
  var itemCountEl = document.getElementById("itemCount");
  itemCountEl.append(count)
  
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  var cartContents = Cart.items[(Cart.items.length)-1];
  console.log("the contents are " + cartContents);

  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
