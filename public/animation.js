let positions = new Map();
let vectors = new Map();
let boidCount = 10;

function updatePosition(obj) {
  positions.set(obj.id, [
    all.getBoundingClientRect().left + all.getBoundingClientRect().width / 2,
    all.getBoundingClientRect().top - all.getBoundingClientRect().height / 2,
  ]);
}

function updateVector(obj) {
  vectors.set(obj.id, obj.style.transform.slice(8, -4));
}

function distance(obj1, obj2){
  let pos1 = positions.get(obj1.id);
  let pos2 = positions.get(obj2.id);
  return Math.sqrt((pos1[0] - pos2[0])**2 + (pos1[1] - pos2[1])**2);
}

function animate() {
  var elem = document.getElementById("inner");
  elem.style.width = 100 + "px";
  elem.style.height = 50 + "px";
  elem.style.left = 100 + "px";
  elem.style.top = 100 + "px";

  const interval = 20;
  let speed = 5;

  var container = [elem];

  var inner = document.querySelector("#inner");
  for(let i = 0; i < boidCount; i++){
    var clone = inner.cloneNode(true);
    clone.id = "inner" + (i+1);
    elem.after(clone);
    container.push(clone);
  }

  for (all of container) {
    let d = Math.floor(Math.random() * 360);
    all.style.transform = "rotateZ(" + d + "deg)";
    console.log(all.style.transform.slice(8, -4));
    updateVector(all);
    updatePosition(all);
  }
  console.log(positions);
  console.log(vectors);

  animationid = setInterval((frame) => {
    for (all of container) {
      if (all.getBoundingClientRect().right <= -150) {
        all.style.left =
          all.getBoundingClientRect().left + window.innerWidth + 100 + "px";
      }
      if (all.getBoundingClientRect().top <= -150) {
        all.style.top =
          all.getBoundingClientRect().top + window.innerHeight + 100 + "px";
      }
      if (all.getBoundingClientRect().top >= window.innerHeight + 100) {
        all.style.top =
          all.getBoundingClientRect().top - window.innerHeight - 150 + "px";
      }
      if (all.getBoundingClientRect().left >= window.innerWidth + 100) {
        all.style.left =
          all.getBoundingClientRect().left - window.innerWidth - 150 + "px";
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
      let xcom = Math.cos((vectors.get(all.id) * Math.PI) / 180);
      let ycom = Math.sin((vectors.get(all.id) * Math.PI) / 180);
      all.style.top =
        parseFloat(all.style.top.slice(0, -2), 10) + ycom * speed + "px";
      all.style.left =
        parseFloat(all.style.left.slice(0, -2), 10) + xcom * speed + "px";
      updatePosition(all);
      for(each of container){
        if(each.id != all.id && distance(all, each) < 100){
          let curd = vectors.get(all.id);
          let otherd = vectors.get(each.id);
          all.style.transform = "rotateZ(" + (0.99*curd + 0.01*otherd) + "deg)";
          updateVector(all);
        }
      }
    }
  }, interval);
}
