const btnSubmit = document.querySelector(".btn-submit")
const base = document.querySelector(".input-base")
const height = document.querySelector(".input-height")
const displayOutput = document.querySelector("#display-output")

function validateInput(){
    if(Number(base.value)<=0){
        displayOutput.innerText = "Base should be greater than zero"
    }else if(Number(height.value)<=0){
        displayOutput.innerText = "Height should be greater than zero"
    }else{
        calculateHypotenuse()
    }
}

function calculateHypotenuse(){ 
    var hypotenuse = Math.sqrt(Number(base.value)**2  + Number(height.value)**2 )
    displayOutput.innerText = "The length of hypotenuse is "+hypotenuse
}

function submitEventListener(){
    validateInput()
}

btnSubmit.addEventListener("click",submitEventListener)