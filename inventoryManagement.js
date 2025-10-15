// Write your code here

//logFirstProduct function
const products = ["Laptop", "Phone", "Headphones", "Monitor"]

function logFirstProduct() {
  console.log(products[0]);
}

//addProduct function
function addProduct(product) {
  products.push(product);;
}

//updateProductName function
function updateProductName(index, newName) {
  products[index] = newName;
}


//removeLastProduct function
function removeLastProduct() {
  products.pop();
}


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
