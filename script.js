// Determining Button press
let numberOfDrums = $(".drums").length;
for (let i = 0; i < numberOfDrums; i++) {
    $(".drums")[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML; // it stores 'w a s d j k l' , which is clicked 
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}
// Determining Keyboard press
$(document).keypress(function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            let crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;
        case "a":
            let tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
        case "s":
            let tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;
        case "d":
            let kickBass = new Audio("sounds/kick-bass.mp3")
            kickBass.play();
            break;
        case "j":
            let tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;
        case "k":
            let tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;
        case "l":
            let snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;

        default:
            break;
    }
}

// Adding Animation on Keyboard Presses & Mouse Clicks
function buttonAnimation(key) {
    let keyAnimation = document.querySelector("." + key);

    // "pressed" Class is added to buttons when they are pressed
    keyAnimation.classList.add("pressed");

    // "pressed" Class is removed after 1s
    setTimeout(function () {
        keyAnimation.classList.remove("pressed");
    }, 100)

}