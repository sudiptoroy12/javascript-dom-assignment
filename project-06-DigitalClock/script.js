

const clock = document.querySelector("#clock")


function updateTime(){
    const now = new Date()

    let hours = now.getHours()
    let minutes = now.getMinutes()
    let second = now.getSeconds()

    let ampm = hours >= 12 ? "PM" : "AM"

    hours = hours % 12
    hours = hours ? hours : 12

    hours = String(hours).padStart(2, "0")
    minutes = String(minutes).padStart(2, "0")
    second = String(second).padStart(2, "0")

    clock.textContent = `${hours} : ${minutes} : ${second} ${ampm}`
}


let a = 23

let result = a % 12
console.log(result);



updateTime()

setInterval(updateTime, 1000)