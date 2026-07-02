




const btn = document.querySelector(".btn")
const quotediv = document.querySelector("#quote")

const quotes = [
        "Success is not final, failure is no fatal.",
        "Believe in yourself and all that you are.",
        "Dream big. Work hard. Stay focused.",
        "Never give up because great things take time.",
        "The best way to predict the future is to create it."
    ]



btn.addEventListener("click", ()=>{
    

    const randomIndex = Math.floor(Math.random()*quotes.length)

    
    quotediv.textContent = quotes[randomIndex]
      
    
})


