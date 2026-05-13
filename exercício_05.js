function ex5() {
  let numero = Number(prompt("Digite um número inteiro:"));

  if (numero % 2 === 0) {
    numero += 1;
    console.log("Número transformado em ímpar:", numero);
  } else {
    numero += 1;
    console.log("Número transformado em par:", numero);
  }
}