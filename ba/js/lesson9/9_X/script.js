"use strict";

//Extra Task
class ProgressBar {
  progress() {
    const progressGrow = function () {
      let el = document.querySelectorAll(".bar");
      el[0].style.width = `${Math.min(parseInt(el[0].style.width) + 10, 100)}%`;
      console.log(el[0].style.width);
    };
    const progressReset = function () {
      let el = document.querySelector(".bar");
      el.style.width = "0";
    };
    const container = document.createElement("div");
    document.body.appendChild(container);
    container.classList.add("container");

    const bar = document.createElement("div");
    container.appendChild(bar);
    bar.classList.add("bar");
    bar.style.width = "0";

    const btn = document.createElement("button");
    document.body.appendChild(btn);
    btn.innerHTML = "Click Me";
    btn.classList.add("btn");

    const btnReset = document.createElement("button");
    document.body.appendChild(btnReset);
    btnReset.innerHTML = "Reset";
    btnReset.classList.add("btn");

    btn.onclick = progressGrow;
    btnReset.onclick = progressReset;
  }
}

let myProg = new ProgressBar();

myProg.progress();
