
// Select some elements...
let myHeader = document.querySelector("#page-header") 
myHeader.style.textAlign = "left"

let dogImages = document.querySelectorAll(".dog-image")
for (let i = 0; i < dogImages.length; i++) {
    dogImages[i].style.borderRadius = "50px"
}

let dogNames = document.querySelectorAll(".dog-name")
for (let i = 0; i < dogNames.length; i++) {
    dogNames[i].style.color = "pink"
}

let myBackground = document.querySelector("body")
myBackground.style.backgroundColor = "yellow"