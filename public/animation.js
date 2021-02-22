function animate(){
  var elem = document.getElementById("inner")
  elem.style.width = 100 + "px";
  elem.style.height = 50 + "px";
  elem.style.left = 100 + "px";

  const interval = 20;
  
  animationid = setInterval((frame) => {
    if(elem.getBoundingClientRect().left >= window.screen.width){
      elem.style.left = elem.getBoundingClientRect().left - window.screen.width - 150 + "px";
      console.log("here");
    }else{
      elem.style.left = parseInt(elem.style.left.slice(0,-2)) + 20 + "px";
    }
  }, interval);
}