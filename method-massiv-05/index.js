"use strict";

// ------------------------------ #1 --------------------------
const getRandomArray = (length, min, max) => {
  const arrRandom = new Array(length);
  for (let i = 0; i < arrRandom.length; i++) {
    arrRandom[i] = Math.floor(min + Math.random() * (max - min + 1));
  }

  return arrRandom;
};
console.log("getRandomArray(15,1,100)", getRandomArray(15, 1, 100));

// ------------------------------ #2 --------------------------

const number = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
console.log("Массив Number - ", number);

const getModa = (...numbers) => {
  let moda = -1;
let modaNumber;
  const countModa = numbers[0].map((num) => {
    let count = numbers[0].filter((item) => {
      if (Number.isInteger(item)) {
        return item === num;
      }
    }).length;
    return count;
  });
  for (let modaCount of countModa) {
    if (modaCount > moda) {
      moda = modaCount;
    }
  }
  for (let i = 0; i < countModa.length; i++) {
    if (countModa[i] >= moda) {
      modaNumber = number[i];
    }
  }
  return modaNumber;
};
console.log("Мода массиву Number - ", getModa(number));

// ------------------------------ #3 --------------------------

const getAverage = (...numbers) => {
  let avarge = 0;
  let count = numbers[0].length;
  numbers[0].forEach((element) => {
    if (Number.isInteger(element)) {
      return (avarge += element);
    }
  });

  return avarge / count;
};
console.log("Середне арефметичне Number - ", getAverage(number));

// ------------------------------ #4 --------------------------

function getMedian(...numbers) {
  let count = 0;
  let median = numbers[0].slice();
  median.sort((a, b) => a - b);
  do {
    median.pop();
    median.shift();
  } while (median.length > 2);

  if (median.length === 2) {
    for (let i = 0; i < median.length; i++) {
      count = median[0] + median[1];
      return count / 2;
    }
  }

  return median[0];
}

console.log("Медіана Number - ", getMedian(number));

// ------------------------------ #5 --------------------------

const filterEvenNumbers = (...numbers) => {
  const evenNumbers = numbers[0].filter((item) => {
    if (item % 2 !== 0) {
      return item;
    }
  });
  return evenNumbers;
};
console.log(
  "Фільтрує парні числа масcиву:(1, 2, 3, 4, 5, 6,) - ",
  filterEvenNumbers([1, 2, 3, 4, 5, 6])
);

// ------------------------------ #6 --------------------------

const countPositiveNumbers = (...numbers) => {
  let count = 0;
  const positivNumber = numbers[0].map((item) => {
    if (item > 0) {
      return (count += 1);
    }
  });
  return count;
};
console.log(
  "Кількість чмсел більше '0' масиву(1, -2, 3, -4, -5, 6, -5) - ",
  countPositiveNumbers([1, -2, 3, -4, -5, 6, -5])
);

// ------------------------------ #7 --------------------------

const getDividedByFive = (...numbers) => {
  const divideByFive = numbers[0].filter((item) => {
    if (Number.isInteger(item / 5)) {
      return item;
    }
  });
  return divideByFive;
};
console.log(
  "Числа які діляться на '5' массиву Number",
  getDividedByFive(number)
);
console.log(number);

// ------------------------------ #8 --------------------------

const replaceBadWords = (string) => {
  const badWords = ["fuck", "shit"];
  let muteBadWords = string.slice();
  for (let words of badWords) {
    muteBadWords = muteBadWords.split(words).join("****");
  }
  return muteBadWords;
};

console.log(
  "Замінені погані слова - ",
  replaceBadWords("Are you fucking kidding?  Holy shit!")
);

// ------------------------------ #9 --------------------------

const divideByThree = (word) => {
  let text = word.split(" ").join("");
  text = text.toLowerCase().split("");
  let divideWord = [];
  for (let i = 1; i <= text.length; ) {
    if (text.length >= 3) {
      divideWord.push(text.splice(0, 3).join(""));
    } else {
      divideWord.push(text.splice(0).join(""));
    }
  }

  return divideWord;
};
console.log(
  "Pозбиває кожне слово на умовні склади по 3 букви -",
  divideByThree("Commander")
);
console.log(
  "Pозбиває кожне слово на умовні склади по 3 букви -",
  divideByThree("Live")
);


