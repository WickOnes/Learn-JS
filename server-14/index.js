"use strict";
const buttonPersonag = document.querySelector(".btn");
const buttonPlanet = document.querySelector(".btnPlanet");
const buttonNext = document.querySelector(".next")
const buttonPrevious = document.querySelector(".previous")

let countPageApi = "https://swapi.dev/api/planets/?page=1"
const main = document.createElement("div");
main.className = "main";
document.body.append(main);
const personag = [
  "Luke Skywalker",
  "C-3PO",
  "R2-D2",
  "Darth Vader",
  "Han Solo",
  "Leia Organa",
  "Obi-Wan Kenobi",
  "Boba Fett",
  "Bossk",
  "Chewbacca",
  "IG-88",
  "Wedge Antilles",
  "Yoda",
  "Palpatine",
  "Lando Calrissian",
  "Lobot",
];

// --------------Функція персонажів фільму
async function getPerson() {
  //------очистка контенту
  main.innerHTML = "";
  // ------------ Перевірка введенного фільму, додавання фільму та очистка поля вводу
  const input = document.querySelector("#input");
  if (input.value > 6 || input.value < 1) {
    return alert("Такого фільму нема");
  }
  const people = await fetch(`https://swapi.dev/api/films/${input.value}/`);
  input.value = "";
  // ---------------------- сторінка загрузки
  const loading = document.querySelector(".load");
  loading.classList.remove("noload");
  //   ---------------------------Формування блоків з персонажами вибранного фільму
  const peopleJson = await people.json();
  let blockContent = "";
  for (let i = 0; i < peopleJson.characters.length; i++) {
    const persona = await fetch(peopleJson.characters[i]);
    const personaJson = await persona.json();
    let imgName = "NO IMG";
    personag.forEach((count) => {
      if (count === personaJson.name) imgName = personaJson.name;
    });
    blockContent += `<div class = "blockStyle"> <img src="img/${imgName}.jpg"> <p>Name: ${personaJson.name}</p><p>Gender: ${personaJson.gender}</p><p>Birthday: ${personaJson.birth_year}</p> </div> `;
  }
  //------------видалення сторінки загрузки
  loading.classList.add("noload");

  //-----------формування сторінки
  main.innerHTML = blockContent;
}

// ---------------Функціія планет
async function getPlanet() {
  const loading = document.querySelector(".load");
  //------очистка контенту
  main.innerHTML = "";
  const planet = await fetch(countPageApi);
  const planetJson = await planet.json();
  const planetName = await planetJson.results;
  // ---------------------- сторінка загрузки

  loading.classList.remove("noload");
  //------------ формування сторінки з планетами
  let blockContent = "";
  for (let i = 0; i < planetName.length; i++) {
    const namePlanet = planetName[i].name;
    blockContent += `<div class = "blockStylePlanet"><p>Name: ${namePlanet}</p></div> `;
  }
  //------------видалення сторінки загрузки
  loading.classList.add("noload");

  //-----------формування сторінки
  main.innerHTML = blockContent;
}


async function nextPage(){
const pageApi = await fetch(countPageApi)
const pageApiJson = await pageApi.json()
if(!pageApiJson.next) return
countPageApi = pageApiJson.next
    getPlanet()
}

async function previousPage(){
    const pageApi = await fetch(countPageApi)
    const pageApiJson = await pageApi.json()
    if(!pageApiJson.previous) return
    countPageApi = pageApiJson.previous
        getPlanet()
    }



buttonPlanet.addEventListener("click", getPlanet);
buttonNext.addEventListener('click',nextPage)
buttonPrevious.addEventListener('click',previousPage)
buttonPersonag.addEventListener("click", getPerson);
