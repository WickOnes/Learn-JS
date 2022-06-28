"use srtict";

function playMusicClick (e){
    if (!e.target.closest(".key")) return;
    const key = document.getElementById(e.target.closest(".key").id);
    const audio = document.getElementsByClassName(e.target.closest(".key").id);
    audio[0].currentTime = 0;
    audio[0].play();
    key.classList.add("play");
    key.addEventListener('transitionend', removeTransition)
}
function removeTransition (e){
    this.classList.remove('play')
}
window.addEventListener("click", playMusicClick);

function playMusicKeys(e){
    const key = document.getElementById(`${e.keyCode}`);
    const audio = document.getElementsByClassName(`${e.keyCode}`);
    if (!audio[0]) return;
    audio[0].currentTime = 0;
    audio[0].play();
    key.classList.add("play");
    key.addEventListener('transitionend', removeTransition)
}
window.addEventListener("keydown", playMusicKeys);

