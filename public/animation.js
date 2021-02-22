function animate(){
  var elem = document.getElementById("inner")
  elem.style.width = 100 + "px";
  elem.style.height = 50 + "px";
  elem.style.left = 100 + "px";
  elem.style.top = 100 + "px";

  const interval = 20;

  var container = [elem];

  var inner = document.querySelector("#inner");
  var clone1 = inner.cloneNode(true);
  var clone2 = inner.cloneNode(true);
  clone1.id = "inner1";
  clone2.id = "inner2";
  elem.after(clone1);
  clone1.after(clone2);
  container.push(clone1);
  container.push(clone2);
  for(all of container){
    let d = Math.floor(Math.random() * 360);
    all.style.transform = "rotateZ("+d+"deg)";
    console.log(all.style.transform.slice(8,-4));
  }

  animationid = setInterval((frame) => {
    for (all of container){
      if(all.getBoundingClientRect().right <= -50){
        all.style.left = all.getBoundingClientRect().left + window.innerWidth + "px";
      }
      if(all.getBoundingClientRect().top <= -150){
        all.style.top = all.getBoundingClientRect().top + window.innerHeight + "px";
      }
      if(all.getBoundingClientRect().top >= window.innerHeight){
        all.style.top = all.getBoundingClientRect().top - window.innerHeight - 100 + "px";
      }
      if(all.getBoundingClientRect().left >= window.innerWidth){
        all.style.left = all.getBoundingClientRect().left -window.innerWidth - 100 + "px";
      }
      // if(all.getBoundingClientRect().left >= 0.8*window.innerWidth){
      //   let curd =  all.style.transform.slice(8,-4);
      //   if(curd < 100){
      //     all.style.transform = "rotateZ(" + curd + 1 + "deg)";
      //   }else if(curd > 270){
      //     all.style.transform = "rotateZ(" + curd - 1 + "deg)";
      //   }
      // }
      // if(all.getBoundingClientRect().left < 200){
      //   let curd =  all.style.transform.slice(8,-4);
      //   if(curd < 100){
      //     all.style.transform = "rotateZ(" + curd + 1 + "deg)";
      //   }else if(curd > 270){
      //     all.style.transform = "rotateZ(" + curd - 1 + "deg)";
      //   }
      // }
      let xcom = Math.cos(parseFloat(all.style.transform.slice(8,-4),10)*Math.PI/180);
      let ycom = Math.sin(parseFloat(all.style.transform.slice(8,-4),10)*Math.PI/180);
      all.style.top = parseInt(all.style.top.slice(0,-2),10) + ycom*5 + "px";
      all.style.left = parseInt(all.style.left.slice(0,-2),10) + xcom*5 + "px";
    }

  }, interval);
}