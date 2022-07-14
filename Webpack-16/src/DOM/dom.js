"use strict";

const colorChenge = () => {
  return Math.ceil(Math.random() * 256);
};
const color = () => {
  return `rgb(${colorChenge()}, ${colorChenge()}, ${colorChenge()})`;
};

export const generateBlocks = () => {
  const main = document.createElement("div");
  main.className = "main";
  document.body.append(main);
  for (let i = 1; i <= 25; i++) {
    let block = document.createElement("div");
    block.className = "blockStyle";
    block.style.background = color();
    main.append(block);
  }
};

export const generateBlocksInterval = () => {
  const main = document.createElement("div");
  main.className = "main";
  document.body.append(main);
  for (let i = 1; i <= 25; i++) {
    let block = document.createElement("div");
    block.className = "blockStyle";
    setInterval(() => {
      block.style.background = color();
    }, 1000);

    main.append(block);
  }
};

// export const blockGener =  generateBlocks();
// export const blockIntervalGener = generateBlocksInterval();
