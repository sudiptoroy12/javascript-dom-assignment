


const pass = document.querySelector("#password")
const showpass = document.querySelector("#showPassword")




showpass.addEventListener("change", function(){

   
    if(this.checked){
        pass.type = "text"

    }
    else{
        pass.type = "password"
    }

})

    
    
   
    







