let shoeListAppened = document.querySelector("#shoeList");

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
    console.log( data[i])
        //Displaying Image
      let shoeImageEl = document.createElement("img");
    shoeImageEl.setAttribute("src", data[i].image);
    shoeImageEl.classList = "img-thumbnail";

    //Creating Div to hold Photo, Product name & Shoe Price
    let cardEl = document.createElement("div");
    cardEl.classList = "col-5";
    
    //Creating elements for Product Name & Shoe price 
    let productName = document.createElement("span");
    productName.classList = "card-title";
    let shoePrice = document.createElement("p");

    //getting the info from api and displaying it to page
    productName.textContent = data[i].name;
    shoePrice.textContent = data[i].price;
    
    // Appending all elements to webpage
    cardEl.append(shoeImageEl,productName,shoePrice )
    shoeListAppened.append(cardEl)



}

}




// function createsProductLayout(data){

    

    
// }