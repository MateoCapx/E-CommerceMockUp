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


