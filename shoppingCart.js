const localStorageData = JSON.parse(localStorage.getItem("Product"))
let cart = localStorageData || [];
let shoeListAppened = document.querySelector("#shoeList");




let filterData = localStorageData.filter(item => item.id !== 3)
console.log(filterData)
    
for (let i = 0; i < cart.length; i++) {
  
    
    
    // console.log( cart[i])
        //Displaying Image
      let shoeImageEl = document.createElement("img");
    shoeImageEl.setAttribute("src", cart[i].image);
    shoeImageEl.classList = "img-thumbnail  ";
   
    let modalButtonEl = document.createElement("button");  // Button that displays modal when clicked
    modalButtonEl.classList ="col-6 mx-auto  btn btn-outline-danger "
    modalButtonEl.innerHTML = "Remove from Cart"

    let quantitySelector = document.createElement("input")
    quantitySelector.classList = "cart-quantity-input "

    //Creating Div to hold Photo, Product name & Shoe Price
    let cardEl = document.createElement("div");
    cardEl.classList = "col-3 gy-5 ";
    
    //Creating elements for Product Name & Shoe price 
    let productName = document.createElement("span");
    productName.classList = "card-title";
    let shoePrice = document.createElement("p");

    //getting the info from api and displaying it to page
    productName.textContent = cart[i].name;
    shoePrice.textContent =  "$" +  cart[i].price;  // -- Concatenated $ to Shoe Price
    
    // Appending all elements to webpage
    cardEl.append(shoeImageEl,productName,shoePrice,modalButtonEl,quantitySelector)
    shoeListAppened.append(cardEl)


  

}



// let parentDiv =document.querySelector("#testconcat")

// let concat = document.createElement("div")
// let DivPlay = `<div class="cart-item cart-column">
// <img class="cart-item-image" src="" width="100" height="100">
// <span class="cart-item-title">  </span>
// </div>
// <span class="cart-price cart-column">  </span>
// <div class="cart-quantity cart-column">
// <input class="cart-quantity-input" type="number" value="1">
// <button class="btn btn-danger" type="button">REMOVE</button>
// </div>`

// concat.innerHTML =DivPlay
// parentDiv.append(concat)

// let products = JSON.parse(localStorage.getItem("products"));
// console.log(products)