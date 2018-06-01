const fs = require('fs');

fs.writeFile("nuevo.txt", "Primera línea\nSegunda línea", (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("El archivo fue creado correctamente");
});
