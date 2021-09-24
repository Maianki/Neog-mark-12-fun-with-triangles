const btnSubmit = document.querySelector(".btn-submit")
const base = document.querySelector(".input-base")
const height = document.querySelector(".input-height")
const displayOutput = document.querySelector("#display-output")

function validateArea(){

    if(Number(base.value)<=0){
        displayOutput.innerText = "Base should be greater than zero"
    }else if(Number(height.value)<=0){
        displayOutput.innerText = "Height should be greater than zero"
    }else{
        calculateArea()
    }
}
function calculateArea(){
   var area = (Number(base.value) * Number(height.value))/2
   displayOutput.innerText = "The area of the triangle is "+ area
}

function btnSubmitEventListener(){
    validateArea()
}

btnSubmit.addEventListener("click",btnSubmitEventListener)