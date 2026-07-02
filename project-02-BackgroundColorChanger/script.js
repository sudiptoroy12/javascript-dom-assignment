


const colorText = document.querySelector("#color")

const changebtn = document.querySelector("#change")





changebtn.addEventListener("click", ()=>{
    const letters = "0123456789ABCDEF"
    let color = "#"
    for(let i=0 ; i<6 ;i++){
     color = color +  letters[Math.floor(Math.random()*16)]  
    }
    colorText.innerText = color
    document.body.style.backgroundColor = color
    
})


