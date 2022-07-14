"use strict";
const buttonPersonag = document.querySelector(".btn");
const buttonPlanet = document.querySelector(".btnPlanet");
const buttonNext = document.querySelector(".next");
const buttonPrevious = document.querySelector(".previous");
const loading = document.querySelector(".load");
let countPageApi = "https://swapi.dev/api/planets/?page=1";
let blockContentArray = [];
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

// --------------Check films
function checkEnterFilm() {
  const input = document.querySelector("#input");
  if (input.value > 6 || input.value < 1) return alert("Такого фільму нема");
  loading.classList.remove("noload");
}

// --------------print block personag
async function addPersonagBlock(param) {
  for (let i = 0; i < param.length; i++) {
    const persona = await fetch(param[i]);
    const personaJson = await persona.json();
    let imgName = "NO IMG";
    personag.forEach((count) => {
      if (count === personaJson.name) imgName = personaJson.name;
    });
    blockContentArray.push(
      `<div class = 'blockStyle'> <img src="img/${imgName}.jpg"> <p>Name: ${personaJson.name}</p><p>Gender: ${personaJson.gender}</p><p>Birthday: ${personaJson.birth_year}</p> </div>`
    );
  }
  main.innerHTML = blockContentArray.join();
  input.value = "";
}

// --------------Get personag
async function getPerson() {
  checkEnterFilm();
  main.innerHTML = "";
  const people = await fetch(`https://swapi.dev/api/films/${input.value}/`);
  const peopleJson = await people.json();
  const peopleCharacters = peopleJson.characters;
  await addPersonagBlock(peopleCharacters);
  //------------deled load
  loading.classList.add("noload");
}

// ---------------print block Planet
function addBlockPlanetName (param){
  let blockContent = "";
  for (let i = 0; i < param.length; i++) {
    const namePlanet = param[i].name;
    blockContent += `<div class = "blockStylePlanet"><p>Name: ${namePlanet}</p></div> `;
  }
  main.innerHTML = blockContent;
}
// ---------------print block Planet
async function getPlanet() {
  loading.classList.remove("noload");
  main.innerHTML = "";
  const planet = await fetch(countPageApi);
  const planetJson = await planet.json();
  const planetName = await planetJson.results;
  addBlockPlanetName(planetName)
  loading.classList.add("noload");

}

async function nextPage() {
  const pageApi = await fetch(countPageApi);
  const pageApiJson = await pageApi.json();
  if (!pageApiJson.next) return;
  countPageApi = pageApiJson.next;
  getPlanet();
}

async function previousPage() {
  const pageApi = await fetch(countPageApi);
  const pageApiJson = await pageApi.json();
  if (!pageApiJson.previous) return;
  countPageApi = pageApiJson.previous;
  getPlanet();
}

buttonPlanet.addEventListener("click", getPlanet);
buttonNext.addEventListener("click", nextPage);
buttonPrevious.addEventListener("click", previousPage);
buttonPersonag.addEventListener("click", getPerson);
