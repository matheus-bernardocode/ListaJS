let soma = 0;
let continuar = true;

while (continuar) {
  let numero = Number(prompt("Digite um número:"));
  soma += numero;

  let resposta = prompt("Deseja continuar? (s/n)");
  if (resposta.toLowerCase() !== "s") {
    continuar = false;
  }
}

console.log("Soma total:", soma);