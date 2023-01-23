const encriptar = {
  "a": "ai",
  "e": "enter",
  "i": "imes",
  "o": "ober",
  "u": "ufat",
};
const desencriptar = {
  "ai": "a",
  "enter": "e", 
  "imes": "i",
  "ober": "o",
  "ufat": "u",
};

//Función para ocultar elementos y cambiar estilos de la clase textview
function hideInfo() {
  document.getElementsByClassName("information")[0].style.display = "none";
  document.getElementsByClassName("textview")[0].style.backgroundImage = "none";
} 

// Función para encriptar o desencriptar el texto ingresado en el primer textarea
function encrypt_text(event) {
  // Obtiene el valor del primer textarea
  var text = document.getElementsByClassName("text")[0].value;
  // Utiliza la propiedad innerHTML del botón presionado para determinar si se debe encriptar o desencriptar el texto.
  var letters = event.target.innerHTML === "Encriptar" ? encriptar : desencriptar;
  // Recorre las propiedades del objeto seleccionado y reemplaza las letras originales con las encriptadas
  if (event.target.innerHTML === "Encriptar") {
    for (let letter in letters) {
      text = text.replace(new RegExp(letter, "g"), letters[letter]);
    }
  } else if (event.target.innerHTML === "Desencriptar") {
    // Crea un arreglo con las claves del objeto desencriptar ordenadas de mayor a menor longitud
    var keys = Object.keys(desencriptar).sort((a, b) => b.length - a.length);
    // Recorre las claves ordenadas y reemplaza las letras encriptadas con las originales
    for (let i = 0; i < keys.length; i++) {
      text = text.replace(new RegExp(keys[i], "g"), desencriptar[keys[i]]);
    }
  }
  // Verifica si el primer textarea esta vacio, si es asi retorna.
  if (document.getElementsByClassName("text")[0].value === "") {
    return;
  }
  // Oculta el elemento con clase "information" y el backgraund-img de la clase text-view si el botón presionado es "Encriptar" o "Desencriptar"
  hideInfo();
  // Asigna el texto encriptado o desencriptado al segundo textarea
  document.getElementsByClassName("textview")[0].value = text;
  // Limpia el texto del primer textarea luego de finalizar con la funcion
  document.getElementsByClassName("text")[0].value = "";
}
  function copy_text() {
    // Obtener el valor del segundo textarea
    var text = document.querySelector('.textview').value;

    // Crear un nuevo elemento de input
    var input = document.createElement('input');
    input.value = text;

    // Agregar el elemento al documento
    document.body.appendChild(input);

    // Seleccionar el texto en el input
    input.select();

    // Copiar el texto seleccionado
    document.execCommand('copy');

    // Eliminar el elemento input
    document.body.removeChild(input);
}