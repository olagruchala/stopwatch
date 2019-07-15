let idInterval = 0;
let inputValue = document.getElementById("startingNumber");

let startButton = document.getElementById("startButton");
let onStartClick = function () {
    clearInterval(idInterval);
    document.body.style.backgroundImage = "none";

    idInterval = setInterval(function () {
        let currentNumber = parseInt(inputValue.value);

        if (currentNumber > 0) {
            inputValue.value = (currentNumber - 1).toString();
            if (currentNumber === 1) {
                document.body.style.backgroundImage = "url('confetti.png')";
            }
        } else {
            clearInterval(idInterval)
        }
    }, 1000);
    console.log("idInterval: " + idInterval)
};
startButton.addEventListener ("click", onStartClick);

let stopButton = document.getElementById("stopButton");
let onStopClick = function () {
    clearInterval(idInterval);
    document.body.style.backgroundImage = "none";
};
stopButton.addEventListener("click", onStopClick);