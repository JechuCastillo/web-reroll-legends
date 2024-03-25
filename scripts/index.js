const url = 'scripts/champion.json';

const xhr = new XMLHttpRequest();

function onRequestHandler() {
  if (this.readyState === 4 && this.status === 200) {
    const champion = JSON.parse(this.response);
    const arrayChampion = (Object.values(champion));
    console.log(arrayChampion);

    mostrarCampeones(arrayChampion);
      //Filtrado
    filtrarTops(arrayChampion);
    filtrarJunglas(arrayChampion);
    filtrarMids(arrayChampion);
    filtrarAdcs(arrayChampion);
    filtrarSoporte(arrayChampion);
    console.log(composicion);
    // cambio
  }
}
var composicion = [];
const contenedor = document.querySelector('.contenedor');
xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${url}`);
xhr.send();


function filtrarSoporte(arrayChampion) {
  let soportes = [];
  longitud = arrayChampion.length;
  for (i = 0; i < longitud; i++) {
    if (arrayChampion[i].rol.includes("sup")) {
      soportes.push(arrayChampion[i]);
    }
  }
  let longitudSoporte = soportes.length;
  let random = soportes[Math.floor(Math.random() * longitudSoporte)];
  while (composicion.includes(random)) {
    console.log("SE REPITIO");
    random = soportes[Math.floor(Math.random() * longitudSoporte)];
  }
  composicion.push(random);
}

function filtrarTops(arrayChampion) {
  let toplaners = [];
  let longitud = arrayChampion.length;
  for (i = 0; i < longitud; i++) {
    if (arrayChampion[i].rol.includes("top")) {
      toplaners.push(arrayChampion[i]);
    }
  }
  let longitudTops = toplaners.length;
  composicion.push(toplaners[Math.floor(Math.random() * longitudTops)]);
}

function filtrarJunglas(arrayChampion) {
  let junglas = [];
  let longitud = arrayChampion.length;
  for (i = 0; i < longitud; i++) {
    if (arrayChampion[i].rol.includes("jungla")) {
      junglas.push(arrayChampion[i]);
    }
  }
  let longitudJunglas = junglas.length;
  let random = junglas[Math.floor(Math.random() * longitudJunglas)];
  while (composicion.includes(random)) {
    console.log("SE REPITIO");
    random = junglas[Math.floor(Math.random() * longitudJunglas)];
  }
  composicion.push(random);
}

function filtrarMids(arrayChampion) {
  let mids = [];
  let longitud = arrayChampion.length;
  for (i = 0; i < longitud; i++) {
    if (arrayChampion[i].rol.includes("mid")) {
      mids.push(arrayChampion[i]);
    }
  }
  let longitudMids = mids.length;
  let random = mids[Math.floor(Math.random() * longitudMids)];
  while (composicion.includes(random)) {
    console.log("SE REPITIO");
    random = mids[Math.floor(Math.random() * longitudMids)];
  }
  composicion.push(random);
}

function filtrarAdcs(arrayChampion) {
  let adcs = [];
  let longitud = arrayChampion.length;
  for (i = 0; i < longitud; i++) {
    if (arrayChampion[i].rol.includes("adc")) {
      adcs.push(arrayChampion[i]);
    }
  }
  let longitudAdcs = adcs.length;
  let random = adcs[Math.floor(Math.random() * longitudAdcs)];
  while (composicion.includes(random)) {
    console.log("SE REPITIO");
    random = adcs[Math.floor(Math.random() * longitudAdcs)];
  }
  composicion.push(random);
}

function mostrarCampeones(arrayChampion) {
  let longitud = arrayChampion.length;
  for (i = 0; i < longitud; i++) {
    let nombre = arrayChampion[i].id;
    const imagen = document.createElement('img');
    imagen.src = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/'.concat(nombre).concat('_0.jpg');
    imagen.classList.add('contenedor');
    contenedor.appendChild(imagen);
  }
}

function generarComposicionNormal() {

}
// }
