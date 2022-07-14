"use srict";

// ------------------------Вхідні данні ----------------------------
const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// ------------------------Рахує скільки податків ви заплатите ----------------------------
 function getMyTaxes(salary) {
  return salary * this.tax;
}
export const infoProgram =
  "Податок який буде сплачено в Україні при З/П 1000 - " +
  getMyTaxes.call(ukraine, 1000);

console.log(
  "Податок який буде сплачено в Україні при З/П 1000 -",

  getMyTaxes.call(ukraine, 1000)
);
