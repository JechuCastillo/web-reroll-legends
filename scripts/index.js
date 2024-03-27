//Variables globales
//Guarda un array de campeones por linea
var campeonesPorLinea = [];

//Va guardando la composicion random
var composicion = [];

/*MANEJO DEL JSON */
const url = 'scripts/champion.json';

const xhr = new XMLHttpRequest();

function onRequestHandler() {
  if (this.readyState === 4 && this.status === 200) {
    const champion = JSON.parse(this.response);
    const arrayChampion = (Object.values(champion));

    //Filtrado de todos los campeones segun su linea
    filtrarTops(arrayChampion);
    filtrarJunglas(arrayChampion);
    filtrarMids(arrayChampion);
    filtrarAdcs(arrayChampion);
    filtrarSoporte(arrayChampion);

  }
}
//Una vez que carga el JS se ejecuta la funcion onRequestHandler
xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${url}`);
xhr.send();


function filtrarTops(arrayChampion) {
  // Crea un array de toplaners que se guarda en otro array de campeones
  let toplaners = [];
  let longitud = arrayChampion.length;
  for (i = 0; i < longitud; i++) {
    if (arrayChampion[i].rol.includes("top")) {
      toplaners.push(arrayChampion[i]);
    }
  }
  campeonesPorLinea.push(toplaners);
}

function filtrarJunglas(arrayChampion) {
  // Crea un array de junglas que se guarda en otro array de campeones
  let junglas = [];
  let longitud = arrayChampion.length;
  for (i = 0; i < longitud; i++) {
    if (arrayChampion[i].rol.includes("jungla")) {
      junglas.push(arrayChampion[i]);
    }
  }
  campeonesPorLinea.push(junglas);
}

function filtrarMids(arrayChampion) {
  // Crea un array de mids que se guarda en otro array de campeones

  let mids = [];
  let longitud = arrayChampion.length;
  for (i = 0; i < longitud; i++) {
    if (arrayChampion[i].rol.includes("mid")) {
      mids.push(arrayChampion[i]);
    }
  }
  campeonesPorLinea.push(mids);
}

function filtrarAdcs(arrayChampion) {
  // Crea un array de adcs que se guarda en otro array de campeones

  let adcs = [];
  let longitud = arrayChampion.length;
  for (i = 0; i < longitud; i++) {
    if (arrayChampion[i].rol.includes("adc")) {
      adcs.push(arrayChampion[i]);
    }
  }
  campeonesPorLinea.push(adcs);
}

function filtrarSoporte(arrayChampion) {
  // Crea un array de soportes que se guarda en otro array de campeones
  let soportes = [];
  longitud = arrayChampion.length;
  for (i = 0; i < longitud; i++) {
    if (arrayChampion[i].rol.includes("sup")) {
      soportes.push(arrayChampion[i]);
    }
  }
  campeonesPorLinea.push(soportes);
}

function generarComposicion() {
  //Esta funcion se encarga de generar la composicion random
  let i = 0;
  let campeon;

  while (i < 5) {

    campeon = obtenerCampeon(campeonesPorLinea[i]);
    //SI hay repetidos no se guarda y se vuelve a obtener otro campeon random.
    if (verificarRepetidos(campeon)) {
      campeon = obtenerCampeon(campeonesPorLinea[i]);
    } else {
      composicion.push(campeon);
      i++;
    }
  }
  i = 0;
  //Funcion para mostrar composicion en html
  mostrarComposicion();

  //Resetea el arreglo de la composicion para futuras composicion
  composicion = [];
}

/*-------------------------------------------------------------------------------------------*/
function verificarRepetidos(campeon) {
  //Verifica si un campeon se repite en la composicion, para no guardarlo
  return composicion.includes(campeon);
}

function obtenerCampeon(campeones) {
  //retorna un campeon random del array de "campeones", que pueden ser (top,jg,mid,adc,sup)
  let cantidad = campeones.length;
  return campeones[Math.floor(Math.random() * cantidad)];
}
/*------------------------------------------------------------------------------------------*/

/* INTERACCION CON EL BOTON DE REROLL */
const rerollBtn = document.getElementById('botonReRoll');
rerollBtn.addEventListener('click', generarComposicion);

function mostrarComposicion() {
  //Muestra los campeones en el html
  const displayUno = document.querySelector('.top');
  const displayDos = document.querySelector('.jg');
  const displayTres = document.querySelector('.mid');
  const displayCuatro = document.querySelector('.adc');
  const displayCinco = document.querySelector('.sup');
  let imagen = [displayUno, displayDos, displayTres, displayCuatro, displayCinco];
  for (i = 0; i < 5; i++) {
    //Cambia la ruta de imagen para mostrar el campeon correspondiente
    imagen[i].src = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/'.concat(composicion[i].id).concat('_0.jpg');
  }
}








// var GLOBAL campeonesPorLinea = []
/*
MAIN
Obtengo los campeones ( TODOS )
5 funciones para filtrarlos
TOPS:
campeonesPorLinea.push(tops[])
JUNGLA
campeonesPorLinea.push(jgs[])
MID
campeonesPorLinea.push(mids[])
ADC
campeonesPorLinea.push(adcs[])
SUP
campeonesPorLinea.push(sups[])

campeonesPorLinea --> boton de reroll
*/











