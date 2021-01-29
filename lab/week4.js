// Week 4 lab – Similar to last week's lab – but without the help!

// The provided code now goes out to the Internet to get our products data.
// You can visit the provided URL – https://kiei451.com/api/products.json –
// in Chrome to see what the data looks like.

// Write a loop to iterate through the product data; each iteration of the loop
// should call a function called renderProduct, which accepts an object representing
// a single product object as input, and appends HTML to an existing element on the page
// with the class "products". You can use the existing HTML in the "products" element
// as a template, deleting it when you're finished.

// 🔥 define your renderProduct function here

async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/products.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.log(json)
  // get data we're working with
  let products = json.products
  // console.log(products)
  
  let renderProduct = function(product) {
    return `
    <div class="p-4 w-full md:w-1/2 lg:w-1/3">
      <div class="border h-full p-4 flex flex-col">
        <h2 class="text-lg font-bold mb-4">${product.name}</h2>
        <div class="mb-4"><img src= ${product.image}>
      </div>
      <div class="mb-4 text-gray-900">
        ${product.description}
      </div>
      <div class="mt-auto text-purple-500 text-2xl">$${product.price}</div>
    </div>
  </div>
  `
}
  // write code to loop through products
  for (let i = 0; i < products.length; i++) {
    let product = products[i]
    console.log(product)
 // render each product, make it work first
    let element = document.querySelector('.products')
    // console.log(element)

    // renderProduct(product)
    // render product
    element.insertAdjacentHTML('beforeend', renderProduct(product))
  }
  
  // 🔥 start here: write code to loop through the products; each
  // iteration of the loop should call your renderProduct function
  // make it work first; then extract to the separate renderProduct
  // function after it's 100% working without it
  
}

window.addEventListener('DOMContentLoaded', pageLoaded)