
function boxCreator(container, numbersBox, colorClass) {
    for (let i = 0; i < numbersBox; i++) {
        const newBox = document.createElement('div');
        newBox.className = 'box';
        container.append(newBox);
        newBox.addEventListener('click',function() {
            this.classList.toggle(colorClass);
        })
    }
}

function buttonCreator(buttonOutput, colorArray, colorSelected) {
    for( let n = 0; n < colorArray.length; n++) {

        const newButton = document.createElement('button');
        newButton.style.backgroundColor = color[n];
        buttonOutput.append(newButton);
        let colorSelected;
        newButton.addEventListener('click', function() {
            colorSelected = color[n];
        })
    }
}
// variabili 
const outputHtml = document.getElementById('grid-output');
const buttonHtml = document.getElementById('button-output')
// bottoni 
const color = ['black', 'red', 'blue', 'green', 'teal']
let colorSelect


boxCreator(outputHtml, 100)

buttonCreator(buttonHtml, color, colorSelect)