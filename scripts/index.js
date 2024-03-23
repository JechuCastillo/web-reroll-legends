const url = 'https://ddragon.leagueoflegends.com/cdn/14.6.1/data/en_US/champion.json';

const xhr = new XMLHttpRequest();

function onRequestHandler() {
  if (this.readyState === 4 && this.status === 200) {
    const champion = JSON.parse(this.response).data;
    const arrayChampion = (Object.values(champion));
    //console.log(arrayChampion);
    for (i = 0; i < arrayChampion.length; i++) {
      let nombre = arrayChampion[i].id;
      //console.log(nombre);
      const imagen = document.createElement('img');
      imagen.src = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/'.concat(nombre).concat('_0.jpg');
      imagen.classList.add('contenedor');
      contenedor.appendChild(imagen);
    }
    filtrarSoporte(arrayChampion);
    filtrarTops(arrayChampion);
    filtrarJunglas(arrayChampion);
  }
}
const contenedor = document.querySelector('.contenedor');
xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${url}`);
xhr.send();
// function mostrar(championArray) {
//   const boton = document.querySelector('.botonRoll');
//   boton.addEventListener('click', reroll(championArray));
// }
// function reroll(championArray) {
//   const parrafo = document.querySelector('P');
//   parrafo.textContent = championArray[Math.floor(Math.random() * 167)];

function filtrarSoporte(arrayChampion) {
  let soportes = [];
  longitud = arrayChampion.length;
  for (i = 0; i < longitud; i++) {
    if (arrayChampion[i].tags.includes("Support")) {
      soportes.push(arrayChampion[i]);
    }
  }
  console.log(soportes);
}

function filtrarTops(arrayChampion) {
  let toplaners = [];
  longitud = arrayChampion.length;
  for (i = 0; i < longitud; i++) {
    if (arrayChampion[i].tags.includes("Fighter") && arrayChampion[i].tags.includes("Tank")) {
      toplaners.push(arrayChampion[i]);
    }
  }
  console.log(toplaners);
}

function filtrarJunglas(arrayChampion) {
  let junglas = [];
  longitud = arrayChampion.length;
  for (i = 0; i < longitud; i++) {
    if (arrayChampion[i].tags.includes("Fighter") && arrayChampion[i].tags.includes("Assassin")) {
      junglas.push(arrayChampion[i]);
    }
  }
  console.log(junglas);
}
// }
