"use strict";

//Task 2
class ModalWindow {
  constructor(text = "Aloha!") {
    this.text = text;
  }
  display() {
    const modal = document.createElement("div");
    document.body.appendChild(modal);
    modal.innerHTML = `<p> ${this.text}</p>`;

    modal.classList.add("modal");
    modal.classList.add("hide");
    const paragraph = document.querySelector("p");
    paragraph.style =
      "width: 400px; height:25%; margin: 0 auto; padding: 25px 10px 0; display:inline-block; text-align: center";
    const modalBtn = document.createElement("button");
    modal.appendChild(modalBtn);
    modalBtn.innerHTML = "Close";
    modalBtn.onclick = this.closeModal;
    modalBtn.style =
      "width: 50%; height: 25%; display: block; color:white; background-color: grey; border: 1px solid black; padding: 2px; margin: 25px auto;";
    const btn = document.createElement("button");
    document.body.appendChild(btn);
    btn.style =
      "width: 50%; height: 200px; display: block;font-size: 2rem;  color: grey; background-color: lightblue; border: 1px solid black; padding: 2px; margin: 0 auto;";
    btn.innerHTML = "Open";
    btn.onclick = this.openModal;
  }
  openModal() {
    const active = document.querySelectorAll("div");
    active[0].classList.remove("hide");
  }
  closeModal() {
    const active = document.querySelectorAll("div");
    active[0].classList.add("hide");
  }
}

let myModal = new ModalWindow("Merry Christmas!!!");
myModal.display();
