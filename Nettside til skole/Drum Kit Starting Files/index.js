
var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
      
    var buttonInnerHTML = this.innerHTML;

makeSound(buttonInnerHTML);

buttonAnimation(buttonInnerHTML);
    }); 

}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})  


function makeSound(key) {
            switch (key){

         case "w":
var tom1 = new Audio("sounds/tom-1.mp3");
tom1.play();
         break;

         case "a":
var LEGO = new Audio("sounds/LEGO.mp3");
LEGO.play();
         break;

         case "s":
var Simon = new Audio("sounds/tom-3.mp3");
Simon.play();
         break;

         case "d":
var skoomelt = new Audio("sounds/skoomelt.mp3");
skoomelt.play();
         break;

         case "j":
var kickbass = new Audio("sounds/kick-bass.mp3");
kickbass.play();
         break;

         case "k":
var crash = new Audio("sounds/crash.mp3");
crash.play();
         break;

         case "l":
var snare = new Audio("sounds/snare.mp3");
snare.play();
         break;

         default: console.log(buttonInnerHTML);
            }
}

function buttonAnimation(currentKey){
var activeButton = document.querySelector("." + currentKey);

activeButton.classList.add("pressed");


setTimeout(function(){
 activeButton.classList.remove("pressed");
})
}