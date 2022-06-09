var up = 0;
var intrvalId;
function moveUp(){
  intrvalId = setInterval(() =>{
    container.style.height = up++ + "px";
  }, 10);
}

function stop(){
  clearInterval(intrvalId);
}
function stopAnimation(e){
  if(e.key== "Enter"){
    stop()
  }

}
