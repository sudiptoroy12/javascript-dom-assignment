


const inputpass = document.querySelector("#password")

const btn = document.querySelector(".btn")
const passdiv = document.querySelector("#pass")





btn.addEventListener("click", ()=>{
   
    
   

   const chart = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456978*&%$#@"

   let password = ""

   const passwordLength = Math.floor(Math.random() * 9 ) + 8
   console.log(passwordLength);
   
   
   
   for(let i=0 ; i < passwordLength ; i++){
     password = password + chart[Math.floor(Math.random() * chart.length)]

   }
  
     inputpass.value = password

    passdiv.innerText = password
    




    
    
})


