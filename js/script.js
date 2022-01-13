
// funzione per creare la tabella di disegno
function gridCreator(container, numberRow, numberColumn, activeColor) {
    let rowBox = 0;
    for(let z = 0; z < numberColumn; z++) {
        columnBox = document.createElement('div')  
        columnBox.className = ''
        container.append(columnBox);
        for (let i = 0; i < numberRow; i++) {
            const newBox = document.createElement('div');
            newBox.className = 'box';
            columnBox.append(newBox);
            newBox.addEventListener('click',function() {
                this.style.backgroundColor = colorSelect;
            })
        }
    }
}

// funzione per creare i bottoni colorati
function buttonCreator(buttonOutput, colorArray, activeColor) {
    for( let n = 0; n < colorArray.length; n++) {
        
        const newButton = document.createElement('button');
        newButton.className = 'button';
        newButton.style.backgroundColor = colorArray[n];
        buttonOutput.append(newButton);
        ;
        newButton.addEventListener('click', function() {
            colorSelect = colorArray[n];
        })
    }
}
// variabili 

const outputHtml = document.getElementById('grid-output');
const buttonHtml = document.getElementById('button-output')
// bottoni 
const color = ['white',
 'aqua',
 'blue',
 'blueviolet',
 'plum',
 'pink',
 'red',
 'tomato',
 'orange',
 'yellow',
 'lime',
 'seagreen',
 'green',
 'brown',
 'grey',
 'black'
]
let colorSelect = ''


const question = document.getElementById('question');
const exit = document.getElementById('exit');
const questionBox = document.getElementById('question-box');

questionBox.classList.add('none')

question.addEventListener('click', function() {
    questionBox.classList.remove('none')
})
exit.addEventListener('click', function() {
    questionBox.classList.add('none')
})






// let userColumn = parseInt(prompt('scegli il numero di colonne'));
// let userRow = parseInt(prompt('scegli il numero di righe'));

let userColumn = 26;
let userRow = 16;

gridCreator(outputHtml, userRow, userColumn, colorSelect)

buttonCreator(buttonHtml, color, colorSelect)