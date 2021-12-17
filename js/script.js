

// variabili 

const outputHtml = document.getElementById('grid-output');
const buttonHtml = document.getElementById('button-output')
// bottoni 
const color = ['white', 'black', 'red', 'blue', 'green', 'teal', 'aqua']
let colorSelect = ''


function columnCreator(container, numberColumn) {
    for (let i = 0; i < numberColumn; i++) {
        const newBox = document.createElement('div');
        newBox.className = 'box';
        container.append(newBox);
        newBox.addEventListener('click',function() {
            this.style.backgroundColor = colorSelect;
        })
    }
}

function gridCreator(container, numberRow) {
    let rowBox = 0;
    for(let z = 0; z < numberRow; z++) {
        rowBox = document.createElement('div')  
        rowBox.className = 'd-flex'
        container.append(rowBox);
        columnCreator(rowBox, 10);
    }
}

function buttonCreator(buttonOutput, colorArray, colorSelected) {
    for( let n = 0; n < colorArray.length; n++) {
        
        const newButton = document.createElement('button');
        newButton.className = 'button';
        newButton.style.backgroundColor = color[n];
        buttonOutput.append(newButton);
        newButton.addEventListener('click', function() {
            colorSelect = color[n];
        })
    }
}
// boxCreator(outputHtml, 100, colorSelect)

gridCreator(outputHtml,15)

buttonCreator(buttonHtml, color, colorSelect)