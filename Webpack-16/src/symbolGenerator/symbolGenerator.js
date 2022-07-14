"use strict";




let textFontSize = document.createElement("h1");
textFontSize.classList.add("textFontSize");



const buttonUp = document.createElement("button");
buttonUp.classList.add("up");
buttonUp.innerHTML = "+"

const buttonDown = document.createElement("button");
buttonDown.classList.add("down");
buttonDown.innerHTML = "-"



let fontSize = 14;
textFontSize.innerHTML = `Розмір тексу : ${fontSize} px`;
textFontSize.style.fontSize = fontSize + "px";

const fontGenerator = newFontGenerator(fontSize);

function* newFontGenerator(inc) {
  let count = 1;
  for (let i = 1; i <= count; i++) {
    count++;
    fontSize = inc;
    let up = yield inc;
    if (up === "up") {
      inc += 2;
    } else if (up === "down") {
      inc -= 2;
    }
  }
}
fontGenerator.next("up").value;
function fontUp() {
  fontGenerator.next("up");
  textFontSize.innerHTML = `Розмір тексу : ${fontSize} px`;
  textFontSize.style.fontSize = fontSize + "px";
  console.log({ fontSize });
}

function fontDown() {
  fontGenerator.next("down");
  textFontSize.innerHTML = `Розмір тексу : ${fontSize} px`;
  textFontSize.style.fontSize = fontSize + "px";
  console.log({ fontSize });
}
buttonUp.addEventListener("click", fontUp);

buttonDown.addEventListener("click", fontDown);



export const elem =  document.createElement("div");
elem.append(textFontSize)
elem.append(buttonUp)
elem.append(buttonDown)