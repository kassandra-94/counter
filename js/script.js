'use strict'
// shortcuts to document.body
const body = document.body;

//1) CREATION OF ELEMENT
//creation mainDiv 
const mainDiv= document.createElement('div');
mainDiv.className = 'mainDiv';

//creation title
const title= document.createElement('h2');
title.innerHTML="Let's ";
title.className= 'title';
title.insertAdjacentHTML('beforeend', '<em>count</em>');

// creation the display and set it to zero
let display = document.createElement('h1');
display.innerText=0;
display.className = 'display';

//creation reset button 
const resetButton= document.createElement('button');
resetButton.className= 'resetButton';
const resetText = document.createElement('h3');
resetText.innerHTML='RESET';
resetText.className= 'resetText';

//creation of div parent
const divButtons = document.createElement('div');
divButtons.className= 'divButtons';

//creation of minus and plus buttons and icons
const plusButton = document.createElement('button');
plusButton.className='plusButton';
const minusButton = document.createElement('button');
minusButton.className= 'minusButton';

let plusIcon= document.createElement('img');
plusIcon.className= 'plusIcon';
let minusIcon = document.createElement('img');
minusIcon.className= 'minusIcon';

//setting default color for icons
plusIcon.setAttribute('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAAy0lEQVRoge2YQQrCMBREpwV7KK0nsL2RKJYeqZ7A6qEM+F2ICxdJs/h0bJm37SfzHyUwBBBCCCaF52HPS3NHgW1yyDBW52HvlVl6HQQAk8t/ZmrPSF8BAhJgIwE2EmAjATYS+BK6Q3a/CX3rVieiZS6rmM1FogDG/8C/LA8kC6DuABsJsJEAmxULGMYZ95jiFvvg9qwS+ra2l0WDfkJL222O14dHru+7UNdYzlx1GtxyV3wHFoIE2EiAjQTYSICNr0BeAczqS0IIsQzeB14jTg7KQxgAAAAASUVORK5CYII=");
minusIcon.setAttribute('src',"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAASUlEQVRoge3PsQ2AIBRFUaRgOmeyYCamo8EFICbG8GNyTvuad1MCAACAV47V0Os5dh55Uq42/Zp3H/magGgCogmIJgAAAAB+6gbexgQU++CPswAAAABJRU5ErkJggg==");

// storing icons colors in variables
let defaultColorPlusIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAAy0lEQVRoge2YQQrCMBREpwV7KK0nsL2RKJYeqZ7A6qEM+F2ICxdJs/h0bJm37SfzHyUwBBBCCCaF52HPS3NHgW1yyDBW52HvlVl6HQQAk8t/ZmrPSF8BAhJgIwE2EmAjATYS+BK6Q3a/CX3rVieiZS6rmM1FogDG/8C/LA8kC6DuABsJsJEAmxULGMYZ95jiFvvg9qwS+ra2l0WDfkJL222O14dHru+7UNdYzlx1GtxyV3wHFoIE2EiAjQTYSICNr0BeAczqS0IIsQzeB14jTg7KQxgAAAAASUVORK5CYII=";
let activeColorPlusIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAAxUlEQVRoge3Y0Q2CMBgE4INhOoTiBMoqOAvMghOIzmBYpr5o4kuhD5eekPteafr3QppcCpiZKVXMzS5DeAA4rCybxm4+sWbWrI0+1g4PAA1zIDtAcQ6g5gBqDqDmAGoO8HUeQna/aftAqxPJMpdZzEpJFsClP/AvhwcWCqDvgJoDqDmA2q4DTMVOse6e+kB7Vmn70MQqPehXjPXxdn09GXPZ70IxZ93YzbS5u74Dm+AAag6g5gBqDqDGDpBTALP6kpnZNrwB0lQcvwSGHrIAAAAASUVORK5CYII=";
let defaultColorMinusIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAASUlEQVRoge3PsQ2AIBRFUaRgOmeyYCamo8EFICbG8GNyTvuad1MCAACAV47V0Os5dh55Uq42/Zp3H/magGgCogmIJgAAAAB+6gbexgQU++CPswAAAABJRU5ErkJggg==";
let activeColorMinusIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAASklEQVRoge3PwQ2AIBREQaQYqrEWi6EWqqEZbABiYgw/JjPXvexLCQAAAF45VsNZy9h55Em7+vRr3n3kawKiCYgmIJoAAAAA+KkbcIYEFNLPAbQAAAAASUVORK5CYII=";

//creation of icon's app reference
const iconsApp = document.createElement('h4');
iconsApp.innerHTML= 'App icon by <a href="https://icons8.it" target=_blank">icons8</a>';


 //2) APPENDING ELEMENTS TO THEIR CLOSEST PARENT
body.appendChild(mainDiv);

// appending children to mainDiv
mainDiv.appendChild(title);
mainDiv.appendChild(display);
mainDiv.appendChild(divButtons);
mainDiv.appendChild(resetButton);
mainDiv.appendChild(iconsApp);

// appending buttons to divButtons
divButtons.appendChild(minusButton);
divButtons.appendChild(plusButton);

// appending icons to buttons
plusButton.appendChild(plusIcon);
minusButton.appendChild(minusIcon);

//appending text to reset button
resetButton.appendChild(resetText);


//SETTING FUNCTIONS
//set click event on reset button  
resetButton.onclick = function(){
  let userChoice= confirm('Are you sure? There\'s no going back.');
 if (userChoice){
  display.innerText= 0;
 }else {
  alert('That was close.');
 }
   }
//setting event listeners to parent element of buttons( event delegation)
divButtons.addEventListener('mousedown',changeIconAndNumber);
divButtons.addEventListener('mouseup', setDefaultIcon);

function changeIconAndNumber(event){
  let target = event.target;     
     
    while (target != divButtons){
      if (target.className == 'plusButton'){
          //raise number on display
          if( display.innerText==0 || display.innerText <= -1 || display.innerText>= 1) { 
              display.innerText++;
              }
          //change color icon of plusButton when clicked
          if ( plusIcon.getAttribute('src') == defaultColorPlusIcon){
              plusIcon.setAttribute('src', activeColorPlusIcon);
              } 
      } else if (target.className == 'minusButton'){
          //decrese number on display
          if(display.innerText== 0 || display.innerText <= -1 || display.innerText>= 1){
          display.innerText--;
              }
          //change color icon of mminusButton when clicked
          if (minusIcon.getAttribute('src') == defaultColorMinusIcon){
          minusIcon.setAttribute('src',activeColorMinusIcon);
              }
            }
          //debug for nested elements
      target = target.parentNode;
  }
}
  
function setDefaultIcon(){
        //setting default colors for icons
        plusIcon.setAttribute('src', defaultColorPlusIcon);
        minusIcon.setAttribute('src', defaultColorMinusIcon);
      }
    