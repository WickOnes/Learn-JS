"use srict";

// ------------------------Вхідні данні ----------------------------
const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// ------------------------Рахує скільки податків ви заплатите ----------------------------
function getMyTaxes(salary) {
  return salary * this.tax;
}
console.log(
  "Податок який буде сплачено в Україні при З/П 1000 -",
  getMyTaxes.call(ukraine, 1000)
);

// ------------------------Рахує скільки у середньому податків платять ----------------------------

function getMiddleTaxes() {
  return this.middleSalary * this.tax;
}
console.log(
  "Скільки у середньому податків платятт IT-спеціалісти в Україні",
  getMiddleTaxes.call(ukraine)
);

// ------------------------Рахує, скільки всього податків платять ----------------------------
function getTotalTaxes() {
  return this.middleSalary * this.tax * this.vacancies;
}
console.log(
  "Скільки у всього податків платятт IT-спеціалісти в Україні",
  getTotalTaxes.call(ukraine)
);

// ------------------------Яка буде писати в консоль об'єкт ----------------------------

function getTaxes() {
  return this.tax;
}

function getMySalary(country) {
  let mySalary = {};

  let timerId = setInterval(() => {
    mySalary["salary"]= Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;

    mySalary["taxes"] = Math.round(mySalary.salary * getTaxes.call(country));

    mySalary["profit"] = mySalary.salary - mySalary.taxes;

    mySalary["tax"] = getTaxes.call(country);

    console.log(mySalary);
  }, 5000);

  return " Wait 5 sec";
}

getMySalary(ukraine);
