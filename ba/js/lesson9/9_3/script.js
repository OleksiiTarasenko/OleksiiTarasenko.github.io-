"use strict";

//Task 3
class TrafficLights {
  constructor() {
    this.state = 1;
  }

  lightsSwitch() {
    const container = document.createElement("div");
    document.body.appendChild(container);
    container.classList.add("container");
    let colors = ["red", "yellow", "green"];
    for (let color of colors) {
      const light = document.createElement("div");
      container.appendChild(light);
      light.classList.add("light", `light_${color}`);
      if (color != "red") {
        light.classList.add("light_off");
      }
    }
    const btn = document.createElement("button");
    document.body.appendChild(btn);
    btn.innerHTML = "Click Me";
    btn.classList.add("btn");
    let counter = 1;
    btn.onclick = function () {
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
    };
  }
}

let myTrafficLights = new TrafficLights(1);

myTrafficLights.lightsSwitch();
