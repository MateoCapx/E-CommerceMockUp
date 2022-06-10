let cart =[]; // The array that all of the products will be stored in. 
let shoeListAppened = document.querySelector("#shoeList");

// Grabbing the Shopping Cart icon
let shoppingCartIcon = document.querySelector(".fa-solid")
shoppingCartIcon.addEventListener('click',function(){
    window.location.href = "shoppingCart.html"
})



// API Function
async function shoeApi() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com',
            'X-RapidAPI-Key': 'e5eb4ef180mshbf601c540e61cb2p1b592bjsnf529ab523414'
        }
    };

    fetch('https://shoes-collections.p.rapidapi.com/shoes', options)
        .then(response => response.json())
        .then((data) => {
           console.log(data)
           displayApiInfo(data)
           
        })
        .catch(err => console.error(err));

  
}
shoeApi();


// iterating through API Information/ Displaying shoes onto webpage
function displayApiInfo(data){

    
for (let i = 0; i < data.length; i++) {
    // console.log( data[i])
        //Displaying Image
      let shoeImageEl = document.createElement("img");
    shoeImageEl.setAttribute("src", data[i].image);
    shoeImageEl.classList = "img-thumbnail  ";
   
    let modalButtonEl = document.createElement("button");  // Button that displays modal when clicked
    modalButtonEl.innerHTML = "Add to Cart"

    //Creating Div to hold Photo, Product name & Shoe Price
    let cardEl = document.createElement("div");
    cardEl.classList = "col-5 ";
    
    //Creating elements for Product Name & Shoe price 
    let productName = document.createElement("span");
    productName.classList = "card-title";
    let shoePrice = document.createElement("p");

    //getting the info from api and displaying it to page
    productName.textContent = data[i].name;
    shoePrice.textContent =  "$" +  data[i].price;  // -- Concatenated $ to Shoe Price
    
    // Appending all elements to webpage
    cardEl.append(shoeImageEl,productName,shoePrice,modalButtonEl)
    shoeListAppened.append(cardEl)


    // Button that adds indivdual items to shopping cart
    modalButtonEl.addEventListener("click", function(){
          let addCart = cart.push(data[i]) // Push items clicked into array
          localStorage.setItem("Product", JSON.stringify(cart))
        console.log(cart)
    })

}

}

function displayCartItems(){
   

}

displayCartItems()