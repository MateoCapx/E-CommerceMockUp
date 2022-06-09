// Getting the Shop now button in the header section
//Redirecting User to Mens Collection once buttton is clicked
let shopNowBtn = document.querySelector("#shopNowBtn")
shopNowBtn.addEventListener("click", function () {
    window.location.href = "MensCollection.html"
})

// Grabbing the Shopping Cart icon
let shoppingCartIcon = document.querySelector(".fa-solid")
shoppingCartIcon.addEventListener('click',function(){
    window.location.href = "shoppingCart.html"

})

//Grabbing the mens collection photo and linking it to the mens collection page
let MensCollection = document.querySelector("div.content-wrapper")
MensCollection.addEventListener("click", function() { 
    window.location.href = "MensCollection.html"

})

//Grabbing the womans collection photo and linking it to the womans collection page
let womansCollection = document.querySelector("div.content-wrapper1")
womansCollection.addEventListener("click", function() { 
    window.location.href = "WomansCollection.html"

})

































// Code for side bar funtionality
// // onclick funtion initialized in the HTML Document
// function openNav() {
//     console.log(" OPENS ")
//     document.getElementById("mySidebar").style.width = "250px";
// }

// // onclick funtion initialized in the HTML Document
// function closeNav() {
//     console.log(" Closes ")
//     document.getElementById("mySidebar").style.width = "0";
// }
