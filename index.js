window.addEventListener('DOMContentLoaded', function() {
    console.log("hiya pet");

    //preliminary variable definitions//

    var numbersDisplay = document.getElementById('numbers-display');
    var calculatorDisplayFigure = "";

    //code that powers the calculator function: 1. creating an array from the HTMLCollection containing all number buttons on the calculator and updating the calculator interface whenever they are pressed//

    var numberButtons = document.getElementsByClassName('number');

    var numberKeysArrayOriginal = [];

    for (var i = 0; i < numberButtons.length; i++) {
        numberKeysArrayOriginal.push(numberButtons[i]);
    }

    var numberButtonsListening = numberKeysArrayOriginal.map(function(value) {
        value.addEventListener('click', function(event) {
            if (event.target.innerHTML == "RESET") {
                calculatorDisplayFigure = "";
                numbersDisplay.innerHTML = calculatorDisplayFigure;
            } else if (event.target.innerHTML == "DEL" && calculatorDisplayFigure.length >= 1) {
                var replacementDisplay = "";
                for (var i = 0; i != calculatorDisplayFigure.length - 1; i++) {
                    replacementDisplay += calculatorDisplayFigure[i];
                }
                calculatorDisplayFigure = replacementDisplay;
                numbersDisplay.innerHTML = calculatorDisplayFigure;
            } else {
                var placeholder = value.innerHTML;
                calculatorDisplayFigure += String(placeholder);
                numbersDisplay.innerHTML = calculatorDisplayFigure;
            }
        });
        return value;
    }) 

    
    




    
    

    
})
