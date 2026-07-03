const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");

const btn = document.querySelector(".btn");
const divadd = document.querySelector("#resultadd");
const divsub = document.querySelector("#resultsub");
const divmul = document.querySelector("#resultmul");
const divdivide = document.querySelector("#resultdivide");

   btn.addEventListener("click", () => {
        const numberOne = Number(number1.value);
        const numberTwo = Number(number2.value);

        const resultadd = numberOne + numberTwo;
        const resultsub = numberOne - numberTwo;
        const resultmul = numberOne * numberTwo;
        const resultdivide = numberOne / numberTwo;

       divadd.innerText = `Add: ${resultadd}`;
       divsub.innerText = `Subtract: ${resultsub}`;
       divmul.innerText = `Multiply: ${resultmul}`;
       divdivide.innerText =
       numberTwo !== 0
         ? `Divide: ${resultdivide}`
        : `Divide: Can not divide by zero`;
    });


//  function dia try kore dekhi
/*  function add(){
    btn.addEventListener("click", ()=>{

        const numberOne = Number(number1.value)
        const numberTwo = Number(number2.value)

        const resultadd = numberOne + numberTwo

        console.log(resultadd);

        divadd.innerText = `Add: ${resultadd}`

    })
}
function subtract(){
    btn.addEventListener("click", ()=>{

        const numberOne = Number(number1.value)
        const numberTwo = Number(number2.value)

        const resultsub = numberOne - numberTwo

        divsub.innerText = `Subtract: ${resultsub}`

    })
}
function multiply(){
    btn.addEventListener("click", ()=>{

        const numberOne = Number(number1.value)
        const numberTwo = Number(number2.value)

        const resultmul = numberOne * numberTwo
        divmul.innerText = `Multiply: ${resultmul}`

    })
}
function divide(){
    btn.addEventListener("click", ()=>{

        const numberOne = Number(number1.value)
        const numberTwo = Number(number2.value)

        const resultdivide = numberOne / numberTwo
       divdivide.innerText = `Divide: ${resultdivide}`

    })
}

add()
subtract()
multiply()
divide()

*/

//  function parameter dia korlam same jinis


     /*   function calculate (numberOne,numberTwo){

            const resultadd = numberOne+ numberTwo;
            const resultsub = numberOne - numberTwo;
            const resultmul = numberOne * numberTwo;
            const resultdivide = numberOne / numberTwo;

            divadd.innerText = `Add: ${resultadd}`;
            divsub.innerText = `Subtract: ${resultsub}`;
            divmul.innerText = `Multiply: ${resultmul}`;
            divdivide.innerText =
                numberTwo !== 0
                ? `Divide: ${resultdivide}`
                : `Divide: Can not divide by zero`;

        }

        btn.addEventListener("click", () => {
            const num1 = Number(number1.value);
            const num2 = Number(number2.value);
            calculate(num1,num2)

  
        });
        */
