
// DETEKTIRANJE KOE KOPCE NA WEB-STRANATA E KLIKNATO

var number_of_drum_buttons = document.querySelectorAll(".drum").length; //kolku kopcinja so klasa .drum ima

for (var i = 0; i < number_of_drum_buttons; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function(){

var buttonInnerHtML = this.innerHTML

  makeSound(buttonInnerHtML);
  buttonAnimation(buttonInnerHtML);
  }

);
}
// --------------------------------------------------------------------------------
// DETEKTIRANJE KOE KOPCE OD TASTATURA E PRETISNATO

 document.addEventListener("keydown", function(event){
   var buttonKeyboard = event.key;
   makeSound(buttonKeyboard);
   buttonAnimation(buttonKeyboard);
 })


 // SVIRENJE

function makeSound(pretisnato_kopce_od_tastatatura_ili_od_web){

  switch (pretisnato_kopce_od_tastatatura_ili_od_web) {

    case "w":
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
      break;

      case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
        break;

        case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
          break;

          case "d":
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
            break;

            case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
              break;

              case "k":
              var audio = new Audio("sounds/kick-bass.mp3");
              audio.play();
                break;

                case "l":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                  break;
    default:
      console.log(this)
  }
}

function buttonAnimation(activeKey){
  var pressedKey = document.querySelector("."+activeKey);

   pressedKey.classList.add("pressed");

   setTimeout ( function(){
     pressedKey.classList.remove("pressed");
   }, 100);
}
