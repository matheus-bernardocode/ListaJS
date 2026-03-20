function ex1() {
  let soma = 0;
  let continuar = true;

  while (continuar) {
    let numero = Number(prompt("Digite um número:"));
    soma += numero;

    let resp = prompt("Continuar? (s/n)");
    if (resp !== "s") continuar = false;
  }

  console.log("Soma:", soma); }