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

const pairStudents = studentsGirlAndBoy(students);
console.log(pairStudents);

//----#2

const pairTheme = () => {
  const themesForStudents = themes.slice();
  const pairThemeStudents = [];

  const pairStudentsJoin = pairStudents.map((item) => {
    return item.join(" і ");
  });
  for (let i = 0; i <= pairStudentsJoin.length + 1; i++) {
    pairThemeStudents.push(pairStudentsJoin.splice(0, 1));
    pairThemeStudents[i].push(themesForStudents[i]);
  }
  return pairThemeStudents;
};
let pairStudentsThemes = pairTheme(pairStudents);
console.log(pairStudentsThemes);

//----#3

const studentsMarks = () => {
  const marksStudents = students.slice();
  const mark = marks.slice();
  const testMarks = [];
  for (let i = 0; i < marksStudents.length; i++) {
    testMarks.push(marksStudents.slice(i * 1, i + 1));
    testMarks[i].push(mark[i]);
  }
  return testMarks;
};
let marksStudentsFinal = studentsMarks(marks, students);
console.log(marksStudentsFinal);

//----#4

const themesMarksStudents =  pairTheme(pairStudents).slice();
const marksThemes = (min,max) => {
  for (let i = 0; i < themesMarksStudents.length; i++) {
    themesMarksStudents[i].push(Math.floor(min + Math.random() * (max - min +1 )));
  }
  return themesMarksStudents;
};

let themesMarks = marksThemes(1,5);
console.log(themesMarks);

// ---------------Початкові данні--------------
console.log(students);
console.log(themes);
console.log(marks);
