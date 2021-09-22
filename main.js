const inputAngles = document.querySelectorAll(".input-angle")
const btnIsTriangle = document.querySelector(".btn-is-triangle")
const displayOutput = document.querySelector("#display-output")


function isTriangle(){
    sumOfAngles = calculateAnglesSum()
    if(sumOfAngles === 180){
        displayOutput.innerText = "Hurray! the angles you entered forms a triangle."
    }else{
        displayOutput.innerText = "Alas! the angles don't form a triangle"
    }
}

function calculateAnglesSum(){
    var sum = 0
    for (var i=0;i<3;i++){
        sum = sum + Number(inputAngles[i].value)
    }
    return sum
}
btnIsTriangle.addEventListener("click",isTriangle)