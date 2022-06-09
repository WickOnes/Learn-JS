"use strict";

// ----------------------Вхідні данні----------------
const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

//   function #1 -----------------------

const getSubjects = (student) => {
  const { subjects, ...rest } = student;
  const sub = Object.keys(subjects);
  let subStr = [];

  for (let count of sub) {
    subStr.push(
      count.charAt(0).toUpperCase() + count.slice(1).split("_").join(" ")
    );
  }
  return subStr;
};
console.log(
  "Повертає список предметів для (students[0]) -",
  getSubjects(students[0])
);

//   function #2 -----------------------

const getAverageMark = (student) => {
  const { subjects, ...rest } = student;
  const subMark = Object.values(subjects);
  let averegaMark = 0;
  let count = 0;
  let markCount = 0;

  subMark.forEach((item) => {
    count += item.reduce((prev, curr) => prev + curr, 0);
    markCount += item.length;
    return (averegaMark = count / markCount);
  });

  return Number(averegaMark.toFixed(2));
};

console.log(
  "Повернтає середню оцінку по усім предметам (studets[0]) -",
  getAverageMark(students[0])
);

//   function #3 -----------------------

const getStudentInfo = (student) => {
  const { course, name, ...rest } = student;
  const stud = {};
  stud["course"] = course;
  stud["name"] = name;
  stud["averageMark"] = getAverageMark(student);
  return stud;
};
console.log(
  "Інформація загального виду по переданому студенту (students[0]) - ",
  getStudentInfo(students[0])
);

//   function #4 -----------------------

const getStudentsNames = (students) => {
  let studentName = [];
  for (let count in students) {
    const { name, ...rest } = students[count];
    studentName.push(Object.values(name).join(""));
  }
  return studentName.sort();
};

console.log(
  "Повертає імена студентів у алфавітному порядку",
  getStudentsNames(students)
);

//   function #5 -----------------------

const getBestStudent = (student) => {
  let bestStudents = "";
  let bestMark = 0;
  for (let count of student) {
    let { averageMark, name, ...rest } = getStudentInfo(count);
    if (averageMark > bestMark) {
      bestMark = averageMark;
      bestStudents = name;
    }
  }
  return bestStudents;
};
console.log(
  "Повертає кращого студента зі списку по показнику середньої оцінки - ",
  getBestStudent(students)
);

//   function #5 -----------------------

const calculateWordLetters = (param) => {
  const calculateWord = {};
  for (let i of param) {
    calculateWord[i] = param.split(i).length - 1;
  }
  return calculateWord;
};
console.log("Повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень - ",calculateWordLetters("тест"));
