


const banglaNumber = document.querySelector("#bangla")
const englishNumber = document.querySelector("#english")
const mathNumber = document.querySelector("#math")

const btn = document.querySelector(".btn")
const resultdiv = document.querySelector("#result")





btn.addEventListener("click", ()=>{
    
    const bangla = Number(banglaNumber.value)
    const english = Number(englishNumber.value)
    const math = Number(mathNumber.value) 

    const totalNember = bangla  + english + math

    const average = totalNember / 3

    console.log(typeof(totalNember));
   
    console.log(average);
    

    let grade ;

      if (average >= 80) {
                grade = "A+";
            } else if (average >= 70) {
                grade = "A";
            } else if (average >= 60) {
                grade = "A-";
            } else if (average >= 50) {
                grade = "B";
            } else if (average >= 40) {
                grade = "C";
            } else if (average >= 33) {
                grade = "D";
            } else {
                grade = "F";
            }


               resultdiv.textContent= `
                Total: ${totalNember} ,
                Average: ${average.toFixed(2)} ,
                Grade: ${grade}
            `;
  banglaNumber.value =""
englishNumber.value=""
mathNumber.value=""


})



