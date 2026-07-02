


const csscode = document.querySelector("#cssstyle")

const changebtn = document.querySelector("#change")



function generatecColor(){
     const letters = "0123456789ABCDEF"
    let color = "#"
    for(let i=0 ; i<6 ;i++){
     color = color +  letters[Math.floor(Math.random()*16)]  
    }
    return color
}

changebtn.addEventListener("click", ()=>{

    const color1 = generatecColor()
    const color2 = generatecColor()

    const gradientColor = `linear-gradient(to right, ${color1}, ${color2})`


   
    csscode.innerText = `background: ${gradientColor}`
    document.body.style.background = gradientColor
    
})


