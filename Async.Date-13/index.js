"use strict";

async function getRandomChinese(lenght = 0) {
  function getSymb() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const date = Date.now().toString().slice(-5);
        const symb = String.fromCharCode(date);
        if (lenght < 1) {
          reject(lenght);
        }
        resolve(symb);
      }, 50);
    });
  }
  async function add() {
    let symbols = "";
    let i = 0;
    while (i < lenght) {
      symbols += await getSymb();
      i++;
    }
    return symbols;
  }
  add().then((v) => {
    console.log(v);
  });
  getSymb().catch((e) => {
    console.log("ERROR NO VALUE");
  });
}
getRandomChinese(4);
