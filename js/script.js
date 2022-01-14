'use strict'
// shortcuts to document.body
const body = document.body;



//creating elements: first title, displayer, minusButtons, plusButton and a div to contain them
const mainDiv= document.createElement('div');
mainDiv.className = 'mainDiv';


const firstTitle= document.createElement('h2');
firstTitle.innerHTML="Let 's keep";
firstTitle.className= 'firstTitle';
firstTitle.insertAdjacentHTML('beforeend', '<em>track!</em>');
// set the counter to zero
let displayer = document.createElement('h1');
let displayStart = displayer.innerText;
//displayer.innerText=0;
displayer.className= 'displayer';


//creating  buttons and 
const resetButton= document.createElement('button');
resetButton.className= 'resetButton';
const resetText = document.createElement('h3');
resetText.innerHTML='RESET';
resetText.className= 'resetText';


const divButtons = document.createElement('div');
divButtons.className= 'divButtons';

const plusButton = document.createElement('button');
plusButton.className='plusButton';
const minusButton = document.createElement('button');
minusButton.className= 'minusButton';


const iconsApp = document.createElement('h4');
iconsApp.innerHTML= 'App icon by <a href="https://icons8.it" target=_blank">icons8</a>';

 
// append children to the document.body
body.appendChild(mainDiv);

mainDiv.appendChild(firstTitle);
mainDiv.appendChild(displayer);
mainDiv.appendChild(divButtons);
mainDiv.appendChild(resetButton);
mainDiv.appendChild(iconsApp);

divButtons.appendChild(minusButton);
divButtons.appendChild(plusButton);
//divButtons.appendChild(resetButton);
resetButton.appendChild(resetText);

mainDiv.appendChild(iconsApp);


// set the counter to zero
displayer.innerText=0;


// set the function to raise the number on the counter when mouse is clicked
plusButton.onclick= function(){
if( displayer.innerText==0 || displayer.innerText <= -1 || displayer.innerText>= 1) {
    return displayer.innerText++;
} 
 //return this.innerHTML= '<img src="https://img.icons8.com/ios/50/CF1259/add--v1.png"/>';
}

minusButton.onclick = function(){
    if(displayer.innerText== 0 || displayer.innerText <= -1 || displayer.innerText>= 1){
        return displayer.innerText--;
    }
}

//set the function to reset the  number on the counter when reset button is clicked 
resetButton.onclick = function(){
    return displayer.innerText= 0;
}