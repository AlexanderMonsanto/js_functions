//Question 1 getItems(array)
var data = require("./products.json");
var getItems = function() {
  return (data.items);
}
getItems();

//Question 2 getItemsByBrand(array, brand)
var data = require("./products.json");
var newProductList = [];
var getItemsByBrand = function(array, itemBrand) {
  for (var i = 0; i<array.length; i++) {
    if (array[i].product.brand === itemBrand) {
    newProductList.push(array[i]);
    }
  }
  return newProductList;
}
// console.log(getItemsByBrand(data.items,"Canon"));

//Question 3 getItemsByAuthor(array, author)
var data = require("./products.json");
var getItemsByAuthorList = [];
var getItemsByAuthor = function(array, theAuthor) {
  for (var i = 0; i<array.length; i++) {
    if (array[i]["product"]["author"]["name"].split(" ")[0] === theAuthor) {
    getItemsByAuthorList.push(array[i]);
    }
  }
  return getItemsByAuthorList;
}
// console.log(getItemsByAuthor(data.items,"eBay"));
console.log(getItemsByAuthorList);

//Question 4 getAvailableProducts(array)
var data = require("./products.json");
var newProductList = []
var getAvailableProducts = function(array) {
  for (var i = 0; i<array.length; i++) {
    if (array[i].product.inventories[0].availability === "inStock") {
    newProductList.push(array[i].product.inventories[0].availability + " "+array[i].product.title);
    }
  }
  return newProductList
}
// console.log(getAvailableProducts(data.items));

//Question 5 Use Your Functions
// console.log(getItemsByBrand(data.items,"Nikon"));
console.log(getItemsByAuthor(getItemsByBrand(data.items,"Nikon"),"eBay"));
// console.log(getItemsByBrand(getItemsByAuthor(data.items,"eBay"),"Nikon"));
// console.log(getItemsByBrand(data.items,"Sony"));
// console.log(getItemsByBrand(getAvailableProducts(data.items),"Sony"));



