"use strict";

//Task 3
class TrafficLights {
  lightsSwitch() {
    const container = document.createElement("div");
    document.body.appendChild(container);
    container.classList.add("container");
    let colors = ["red", "yellow", "green"];
    for (let color of colors) {
      const light = document.createElement("div");
      container.appendChild(light);
      light.classList.add("light", `light_${color}`);
     /*  if (color != "red") {
        light.classList.add("light_off");
      } */
      if (color == "red") {
        light.classList.add("active");
      } 
    }
    const btn = document.createElement("button");
    document.body.appendChild(btn);
    btn.innerHTML = "Click Me";
    btn.classList.add("btn");
    let counter = 1;
    /* btn.onclick = function () {
      let lights = document.querySelectorAll(".light");
      if (!((counter - 1) % 4)) {
        lights[0].classList.toggle("light_off");
        lights[1].classList.toggle("light_off");
      } else if (!((counter + 1) % 4)) {
        lights[1].classList.toggle("light_off");
        lights[2].classList.toggle("light_off");
      } else if (!(counter % 4)) {
        lights[1].classList.toggle("light_off");
        lights[0].classList.toggle("light_off");
      } else {
        lights[1].classList.toggle("light_off");
        lights[2].classList.toggle("light_off");
      }
      counter++;
      counter %= 4;
    }; */
    let stateDown = true;
    btn.onclick = function () {
       let lightActive = document.querySelector(".active");
       if(lightActive.nextSibling && stateDown) {
       
       lightActive.classList.toggle('active');
       lightActive.nextSibling.classList.toggle('active');
       } else if (lightActive.previousSibling)
       {stateDown = !stateDown;
        lightActive.classList.toggle('active');
        lightActive.previousSibling.classList.toggle('active');
       }
       let lightActiveIsRed = document.querySelector(".active");
       if (lightActiveIsRed.classList.contains('light_red')) {
         stateDown = !stateDown;
       }
    }
  }
}

let myTrafficLights = new TrafficLights();

myTrafficLights.lightsSwitch();
