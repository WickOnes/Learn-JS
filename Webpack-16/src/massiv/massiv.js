"use strict";

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];

const marks = [4, 5, 5, 3, 4, 5];

// --------------Функції------------------
//---- #1
const studentsGirlAndBoy = () => {
  let pairs = [];
  const newStudents = students.slice();
  [newStudents[1], newStudents[2]] = [newStudents[2], newStudents[1]];

  while (newStudents.length > 0) {
    pairs.push(newStudents.splice(0, 2));
  }

  return pairs;
};

export const pairStudents = studentsGirlAndBoy(students);
console.log(pairStudents);

