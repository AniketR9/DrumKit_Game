var numberofbtns = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberofbtns; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var c = this.innerHTML;
    makeSound(c);
  });
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
});

function makeSound(c){
    var address = "./sounds/";
    switch (c) {
      case "w":
        address += "tom-1.mp3";
        break;
      case "a":
        address += "tom-2.mp3";
        break;
      case "s":
        address += "tom-3.mp3";
        break;
      case "d":
        address += "tom-4.mp3";
        break;
      case "j":
        address += "snare.mp3";
        break;
      case "k":
        address += "crash.mp3";
        break;
      case "l":
        address += "kick-bass.mp3";
        break;
    }
    var audio= new Audio(address);
    audio.play();
    buttonAnimation(c);
}
// var audio= new Audio("./sounds/tom-1.mp3");
// audio.play();



// for adding animations

function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}