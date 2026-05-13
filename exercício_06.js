function ex6() {
  let letra = prompt("Digite uma letra:").toLowerCase();

  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  ) {
    console.log("É uma vogal.");
  } else {
    console.log("É uma consoante.");
  }
}