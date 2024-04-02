//Variables globales
//Guarda un array de campeones por linea
var campeonesPorLinea = [[], [], [], [], []];

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
    filtrarCampeonesPorLinea(arrayChampion);
  }
}
//Una vez que carga el JS se ejecuta la funcion onRequestHandler
xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${url}`);
xhr.send();

function filtrarCampeonesPorLinea(arrayChampion) {
  let cantidadCampeones = arrayChampion.length;
  for (i = 0; i < cantidadCampeones; i++) {
    if (arrayChampion[i].rol.includes("top")) {
      campeonesPorLinea[0].push(arrayChampion[i])
    }
    if (arrayChampion[i].rol.includes("jungla")) {
      campeonesPorLinea[1].push(arrayChampion[i]);
    }
    if (arrayChampion[i].rol.includes("mid")) {
      campeonesPorLinea[2].push(arrayChampion[i]);
    }
    if (arrayChampion[i].rol.includes("adc")) {
      campeonesPorLinea[3].push(arrayChampion[i]);
    }
    if (arrayChampion[i].rol.includes("sup")) {
      campeonesPorLinea[4].push(arrayChampion[i]);
    }

  }
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
const rerollBtn = document.querySelector('.botonReroll');
//Cuando se presiona el boton se genera la composicion aleatoria
rerollBtn.addEventListener('click', generarComposicion);
console.log(rerollBtn);
function mostrarComposicion() {
  //Muestra los campeones en el html
  const displayUno = document.querySelector('.top');
  const displayDos = document.querySelector('.jg');
  const displayTres = document.querySelector('.mid');
  const displayCuatro = document.querySelector('.adc');
  const displayCinco = document.querySelector('.sup');
  const casillaNombre = document.querySelectorAll('.casillaNombre');
  let imagen = [displayUno, displayDos, displayTres, displayCuatro, displayCinco];
  for (i = 0; i < 5; i++) {
    //Cambia la ruta de imagen para mostrar el campeon correspondiente
    imagen[i].src = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/'.concat(composicion[i].id).concat('_0.jpg');
    casillaNombre[i].textContent = composicion[i].name;
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











