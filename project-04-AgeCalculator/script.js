


const inputdate = document.querySelector("#dob")

const agebtn = document.querySelector(".btn")
const agediv = document.querySelector("#age")





agebtn.addEventListener("click", ()=>{
    const dob = inputdate.value

    if(dob === ""){
        agediv.innerText = "please select your date of birth."
        return
    }

    const birthday = new Date(dob)
    const today = new Date()

    let age = today.getFullYear() - birthday.getFullYear()

    let month = today.getMonth() - birthday.getMonth()

    if(month < 0 || (month === 0 && today.getDate() < birthday.getDate())){
        age --
    }

    agediv.innerText = `${age} Years`
    




    
    
})


