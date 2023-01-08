var elSelict = document.querySelector(".selict")
var elinput = document.querySelector(".input")
var elhiddin = document.querySelector(".heddin")
var elform = document.querySelector(".form")




elform.addEventListener("input",function(evt) {
    evt.preventDefault()

    var inputNime = elinput.value;

    elhiddin.textContent = inputNime * elSelict.value

    

    
    
})
