// primero creamos un numero aleatorio entre 1 y 100. 
// Math.random() => [0 - 1)  https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/random
// Math.floor(5.4) => 5 redondeo hacia abajo  https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/floor 
var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// genero referencias a los elementos de HTML usando sus selectores
// para despues poder cambiarles el contenido o su estilo
var intentos = document.querySelector('.intentos');
var ultimoResultado = document.querySelector('.ultimoResultado');
var bajoOAlto = document.querySelector('.bajoOAlto');
var enviarIntento = document.querySelector('.enviarIntento');
var intento = document.querySelector('.intento');

// creo una variable para llevar cuenta de la cantidad de intentos
var contadorDeIntentos = 1;
// creo otra variable para luego crear un boton de reseteo al llegar a los 10 intentos
var botonDeReseteo;

// hago foco sobre el elemento input en el que ingresamos los numeros.
intento.focus();


// funcion para chequear si el intento es correcto o no que se llama al cliquear en el boton "Enviar Intento"
function chequearIntento() {
  // guardo el valor que introduje en el input en una variable llamada valorIntento ademas la convierto al tipo numerico
  var valorIntento = Number(intento.value);

  // si es la primera vez que cliqueamos el boton "Enviar Intento", mostramos este texto.
  if (contadorDeIntentos === 1) {
    intentos.textContent = 'Intentos Anteriores: ';
  }
  // en el resto de los casos, vamos concatenando el valor del intento a los intentos anteriores
  intentos.textContent += valorIntento + ' ';

  // si el valor del intento es igual al numero aletorio calculado, se gana el juego
  if (valorIntento === numeroAleatorio) {
    ultimoResultado.textContent = 'Felicitaciones! Lo lograste!'; // mensaje de felicitaciones 
    ultimoResultado.style.backgroundColor = 'green'; // cambio el background del elemento .ultimoResultado
    bajoOAlto.textContent = ''; // borro el texto de ayuda "mayor o menor"
    setearFinDelJuego(); // llamo a una funcion para desabilitar botones e inputs
  } else if (contadorDeIntentos === 10) { // si llego a los 10 intentos, el juego se termina
    ultimoResultado.textContent = '!!!FIN DEL JUEGO!!!';
    bajoOAlto.textContent = '';
    setearFinDelJuego(); // llamo a una funcion para desabilitar botones e inputs
  } else { // en este caso estoy entre 1 y 10 intentos y mi intento es incorrecto
    ultimoResultado.textContent = 'Erraste! Vuelve a intentarlo!'; // mensaje de error
    ultimoResultado.style.backgroundColor = 'red';
    if (valorIntento < numeroAleatorio) {
      bajoOAlto.textContent = 'El ultimo intento fue muy bajo!'; // mensaje de ayuda
    } else if (valorIntento > numeroAleatorio) {
      bajoOAlto.textContent = 'El ultimo intento fue muy alto!';
    }
  }

  contadorDeIntentos++; // registro el intento sumando un numero al contador de intentos
  intento.value = ''; // borro el valor que ingrese en el input
  intento.focus(); // hago foco en el input
}


// si bien la funcion anterior hace casi toda la logica del juego, es necesario indicar que
// por cada click en el boton "Enviar Intento" se ejecute la logica programada en la funcion
// chequearIntento, esto se hace con el addEventListener
enviarIntento.addEventListener('click', chequearIntento);

// esta funcion es llamada si se encuentra el numero aleatorio o si se llega a los 10 intentos
function setearFinDelJuego() {
  intento.disabled = true; //deshabilitar el input
  enviarIntento.disabled = true; //deshabilitar el boton
  botonDeReseteo = document.createElement('button'); // crear un elemento nuevo <button></button>
  botonDeReseteo.textContent = 'Comenzar nuevo juego'; // <button>Comenzar nuevo juego</button>
  document.body.appendChild(botonDeReseteo); // posicionarlo dentro y como ultimo hijo de body
  botonDeReseteo.addEventListener('click', resetearJuego); // al igual que la linea 64, este listener relaciona el click en el boton anterior con la funcion "resetearJuego"
}

// esta funcion es llamada cada vez que se clickea en el botonDeReseteo
function resetearJuego() {
  contadorDeIntentos = 1; // se resetea la variable contadora de intentos

  var resultados = document.querySelectorAll('.resultados p'); // se guarda la referencia a todos los elementos <p> que se encuentran dentro de <div class="resultados">
  for (var i = 0; i < resultados.length; i++) { // recorro cada uno de los <p> anteriores
    resultados[i].textContent = ''; // borro el contenido dentro de cada <p>
  }

  botonDeReseteo.parentNode.removeChild(botonDeReseteo); // borro el boton de reseteo

  intento.disabled = false; // habilito el input 
  enviarIntento.disabled = false; // habilito el boton "enviar intento"
  intento.value = ''; // borro el resultado del input
  intento.focus(); // hago foco sobre el input

  ultimoResultado.style.backgroundColor = 'white'; // reinicio estilos del <p class="ultimoResultado">

  numeroAleatorio = Math.floor(Math.random() * 100) + 1; // genero un nuevo numero aleatorio
}
