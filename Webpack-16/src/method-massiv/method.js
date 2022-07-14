const getRandomArray = (length, min, max) => {
    const arrRandom = new Array(length);
    for (let i = 0; i < arrRandom.length; i++) {
      arrRandom[i] = Math.floor(min + Math.random() * (max - min + 1));
    }
  
    return arrRandom;
  };
  console.log("getRandomArray(15,1,100)", getRandomArray(15, 1, 100));

  export const infoMethod = "getRandomArray(15,1,100) = " + getRandomArray(15, 1, 100);
  