function ex4() {
  let numeros = [];

  for (let i = 0; i < 4; i++) {
    numeros.push(Number(prompt(`Digite o ${i + 1}º número:`)));
  }

  numeros.sort((a, b) => b - a);

  console.log("Ordem decrescente:", numeros);
}
