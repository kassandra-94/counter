'use strict'
// shortcuts to document.body
const body = document.body;



//creating elements: first title, displayer, minusButtons, plusButton and a div to contain them
const mainDiv= document.createElement('div');
mainDiv.className = 'mainDiv';


const firstTitle= document.createElement('h2');
firstTitle.innerHTML="Let 's keep track!";
firstTitle.className= 'firstTitle';

// set the counter to zero
let displayer = document.createElement('h1');
displayer.innerHTML='0';
displayer.className= 'displayer';


//creating  buttons and 
const resetButton= document.createElement('button');
resetButton.className= 'resetButton';
const resetText = document.createElement('h3');
resetText.innerHTML='RESET';
resetText.className= 'resetText';


const divButtons = document.createElement('div');
const plusButton = document.createElement('button');
const minusButton = document.createElement('button');


const iconsApp = document.createElement('h4');
iconsApp.innerHTML= 'App icon by <a href="https://icons8.it">icons8</a>';

 
// append children to the document.body
body.appendChild(mainDiv);
mainDiv.appendChild(firstTitle);
mainDiv.appendChild(displayer);
mainDiv.appendChild(divButtons);
mainDiv.appendChild(iconsApp);
mainDiv.appendChild(resetButton);
divButtons.appendChild(plusButton);
divButtons.appendChild(minusButton);
resetButton.appendChild(resetText);




//inserting icon plus and minus 
plusButton.insertAdjacentHTML('afterbegin', '<img src="https://img.icons8.com/ios/70/CF1259/plus--v1.png"/>');
minusButton.insertAdjacentHTML('afterbegin', '<img src="https://img.icons8.com/ios/70/CF1259/minus--v1.png"/>');


// set the function to raise the number on the counter when mouse is clicked


// set the function to decrease the number on the counter when mouse is clicked


//set the function to reset the  number on the counter when reset button is clicked 

