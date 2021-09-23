const btnSubmit = document.querySelector(".btn-submit")
const quizForm = document.querySelector(".quiz-form")
const displayOutput = document.querySelector("#display-output")
const answers= ['1','Equilateral','25','60','45','right triangle','25','isosceles','scalene','acute']

function calculateScore(){
    var index = 0
    var score = 0
    form = new FormData(quizForm)
    for(var value of form.values()){
        if(value === answers[index]){
            score+=1
        }
        index+=1
    }
    displayOutput.innerText = "Your Score is : "+score
}

btnSubmit.addEventListener("click",calculateScore)