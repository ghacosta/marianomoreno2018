
function unirNombres(nombre, apellido) {
  var nombreCompleto = nombre + " " + apellido;
  return nombreCompleto;
}

var nombre = unirNombres("Guillermo", "Acosta");
console.log("Primer Metodo:", nombre);

/*------------------------------------------------------------*/

function unirNombres2(nombre, apellido) {
  return nombre + " " + apellido;
}
console.log("Segundo Metodo:", unirNombres2("Guillermo", "Acosta"));

/*------------------------------------------------------------*/

function unirNombres3(nombre, apellido) {
  console.log("Tercer Metodo:", nombre + " " + apellido);
}

unirNombres3("Guillermo", "Acosta");
