
let count = 0

const countText = document.querySelector("#count")

const ibtn = document.querySelector("#increment")
const dbtn = document.querySelector("#decrement")
const rbtn = document.querySelector("#reset")




ibtn.addEventListener("click", ()=>{
    count++
    countText.innerText = count
})
dbtn.addEventListener("click", ()=>{
    count--
    countText.innerText = count
})
rbtn.addEventListener("click", ()=>{
    count = 0
    countText.innerText = count
})
