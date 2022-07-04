"use strict";

let textFontSize = document.querySelector(".textFontSize");
const buttonUp = document.querySelector(".up");
const buttonDown = document.querySelector(".down");


const idGenerator = createIdGenerator();
function* createIdGenerator() {
  let count = 1;
  for (let i = 1; i <= count; i++) {
    count++;
    yield console.log(i);
  }
}

idGenerator.next().value;
idGenerator.next().value;
idGenerator.next().value;
idGenerator.next().value;
idGenerator.next().value;

// ---------------------------------------------
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

// fontGenerator.next("up").value;

// fontGenerator.next("up").value;

// fontGenerator.next("up").value;

// fontGenerator.next().value;

// fontGenerator.next("down").value;

// fontGenerator.next("down").value;

// fontGenerator.next("down").value;

// fontGenerator.next().value;

// console.log({fontSize})
