


const number1 = document.querySelector("#number1")
const number2 = document.querySelector("#number2")


const btn = document.querySelector(".btn")
const divadd = document.querySelector("#resultadd")
const divsub = document.querySelector("#resultsub")
const divmul = document.querySelector("#resultmul")
const divdivide = document.querySelector("#resultdivide")



function add(){
    btn.addEventListener("click", ()=>{

        const numberOne = Number(number1.value)
        const numberTwo = Number(number2.value)

        const resultadd = numberOne + numberTwo
        
        console.log(resultadd);

        divadd.innerText = `Add: ${resultadd}`
        
       
    })
}
function subtract(){
    btn.addEventListener("click", ()=>{

        const numberOne = Number(number1.value)
        const numberTwo = Number(number2.value)

        const resultsub = numberOne - numberTwo
        
        divsub.innerText = `Subtract: ${resultsub}`
       
    })
}
function multiply(){
    btn.addEventListener("click", ()=>{

        const numberOne = Number(number1.value)
        const numberTwo = Number(number2.value)

        const resultmul = numberOne * numberTwo
        divmul.innerText = `Multiply: ${resultmul}`
       
    })
}
function divide(){
    btn.addEventListener("click", ()=>{

        const numberOne = Number(number1.value)
        const numberTwo = Number(number2.value)

        const resultdivide = numberOne / numberTwo
       divdivide.innerText = `Divide: ${resultdivide}`
       
    })
}




add()
subtract()
multiply()
divide()


    
    
   
    







