"use strict";

//Task 1
class TextProcessor {
  constructor(text = "") {
    this.text = text;
  }
  editor() {
    const textDisplay = document.createElement("div");
    document.body.appendChild(textDisplay);
    textDisplay.classList.add("text");
    textDisplay.innerHTML = this.text;

    window.addEventListener("keydown", (event) => {
      if ((event.key == "e" || event.key == "E") && event.ctrlKey) {
        event.preventDefault();
        textDisplay.classList.add("hide");
        this.text = textDisplay.textContent;
        const editArea = document.querySelector(".text_edit");
        editArea.value = this.text;
        editArea.classList.remove("hide");
      }
    });

    const textEdit = document.createElement("textarea");
    document.body.appendChild(textEdit);
    textEdit.classList.add("text_edit");
    textEdit.value = this.text;
    textEdit.classList.add("hide");

    textEdit.addEventListener("keydown", (event) => {
      if ((event.key == "," || event.key == "<") && event.ctrlKey) {
        event.preventDefault();
        event.target.classList.add("hide");
        this.text = event.target.value;
        const text = document.querySelector(".text");
        text.textContent = this.text;
        text.classList.remove("hide");
      }
    });
  }
}

const editor = new TextProcessor("Hello !!!");
editor.editor();
