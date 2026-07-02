


const inputNumber = document.querySelector("#number")

const btn = document.querySelector(".btn")
const resultdiv = document.querySelector("#result")



const randomNumer = Math.floor(Math.random() * 10) +1

btn.addEventListener("click", ()=>{
    
    const userGuess = Number(inputNumber.value)

    console.log(typeof(userGuess));
    



    if(userGuess > randomNumer){
        resultdiv.textContent = "Too High"
    }
    else if(userGuess < randomNumer){
        resultdiv.textContent = "Too Low"
    }
    else{
        resultdiv.textContent = "Correct Answer"
    }

   
    
    
})


