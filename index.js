

document.addEventListener('keydown', function(event) {

const alphaKey=event.keyCode;
Array.from(document.querySelectorAll("audio")).forEach(function(elem) {
const keyAudiou=(elem.getAttribute('data-key'))
if(keyAudiou==alphaKey){
 elem.cloneNode(true).play();

}
    });
    Array.from(document.querySelectorAll(".key")).forEach(function(elemt) {

      const keyItem=(elemt.getAttribute('data-key'))
      if(keyItem==alphaKey){

        elemt.classList.toggle('playing');
 }

          });
       const img1= document.getElementById("hihat-top");
        if(alphaKey==75){
            img1.style.top = '171px';
        }
  });



