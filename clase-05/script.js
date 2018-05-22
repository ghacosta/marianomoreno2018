//los objetos tienen notacion JSON
var persona1 = {
  nombre: "Guillermo",
  apellido: "Acosta",
  id: 1234
};

var persona2 = {
  nombre: "Marcelo",
  apellido: "Garrido",
  id: 1845
};

var persona3 = {
  nombre: "Graciela",
  apellido: "Macario",
  id: 1267
};

// esto es un "array" de objetos
var personas = [persona1, persona2, persona3];

function mostrarNombre(persona){
  console.log(persona.nombre);
}

personas.map(mostrarNombre);

/* array: map, reduce, filter */

//imprimo la variable personas en la consola del navegador
// console.log(personas);
