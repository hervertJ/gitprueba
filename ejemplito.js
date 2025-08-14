let personaje = {
  nombre: "Baku",
  manga: "Usogui",
  edad: 22,
}

console.log(personaje);
console.log(personaje['edad']);
console.log(personaje.nombre);

delete personaje.manga;
console.log(personaje);

function saludar() {
  //console.log("Hola Mundo");
  return 2 + 2;
}

console.log(saludar());
