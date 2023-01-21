const encriptar = {
  "a": "ai",
  "e": "enter",
  "i": "imes",
  "o": "ober",
  "u": "ufat",
  }
const desencriptar = {
  "ai": "a",
  "enter": "e",
  "imes": "i",
  "ober": "o",
  "ufat": "u",
  }

  function encrypt_text(event) {
  var text = document.getElementById("textarea1").value;
  var letters = event.target.innerHTML === "Encriptar" ? encriptar : desencriptar;
  for (let letter in letters) {
    text = text.replace(new RegExp(letter, "g"), letters[letter]);
  }
  if (document.getElementById("textarea1").value === "") {
  return;
  }
  if(event.target.innerHTML === "Encriptar"){
    document.getElementsByClassName("information")[0].style.display = "none"
  }else if(event.target.innerHTML === "Desencriptar"){
    document.getElementsByClassName("information")[0].style.display = "none"
  }
  document.getElementById("textview").value = text;
}