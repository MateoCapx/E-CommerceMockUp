// Getting the Shop now button in the header section
//Redirecting User to Mens Collection once buttton is clicked
let shopNowBtn = document.querySelector("#shopNowBtn")
shopNowBtn.addEventListener("click", function () {
    window.location.href = "MensCollection.html"
    // if(window.location.href = "MensCollection.html"){
    //     console.log(" Link WOrks ")
    // }
  
})

// Grabbing the Shopping Cart icon
let shoppingCartIcon = document.querySelector(".fa-solid")

// onclick funtion initialized in the HTML Document
function openNav() {
    console.log(" OPENS ")
    document.getElementById("mySidebar").style.width = "250px";
}

// onclick funtion initialized in the HTML Document
function closeNav() {
    console.log(" Closes ")
    document.getElementById("mySidebar").style.width = "0";
}

console.log("heyy")

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
           
            console.log(hey)



          })
        .catch(err => console.error(err));

  
}
shoeApi();



// function displayApiInfo(data){
//  console.log(data[0].image);

// }