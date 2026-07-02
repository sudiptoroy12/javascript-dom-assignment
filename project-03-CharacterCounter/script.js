


const textArea = document.querySelector("#text")

const characterCount = document.querySelector("#character")
const wordCount = document.querySelector("#word")





textArea.addEventListener("input", ()=>{
    const text = textArea.value
    
    characterCount.textContent = text.length  

    const words = text.trim()

    if(words ===  ""){
        wordCount.textContent = 0
    }
    else{
        wordCount.textContent = words.split(/\s+/).length
    }
    
})


