



let seconds = 0;
let interval = null;

    const display = document.querySelector("#display");

    function updateDisplay() {
        display.textContent = seconds;
    }

    const start =  document.querySelector("#start")

   start.addEventListener("click", () => {
        if (interval !== null) return;

        interval = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    });


    const stopwatch =  document.querySelector("#stop")

   stopwatch.addEventListener("click", () => {
        clearInterval(interval);
        interval = null;
    });
    const reset =  document.querySelector("#reset")

    reset.addEventListener("click", () => {
        clearInterval(interval);
        interval = null;
        seconds = 0;
        updateDisplay();
    });