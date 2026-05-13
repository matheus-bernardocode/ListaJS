function ex11() {
  let salario = Number(prompt("Digite o salário:"));

  let taxa = 0;

  if (salario <= 1000) {
    taxa = 0.08;
  } else if (salario <= 1500) {
    taxa = 0.085;
  } else {
    taxa = 0.09;
  }

  let desconto = salario * taxa;
  let salarioLiquido = salario - desconto;

  console.log("Salário informado:", salario);
  console.log("Taxa aplicada:", (taxa * 100) + "%");
  console.log("Valor do desconto:", desconto);
  console.log("Salário líquido:", salarioLiquido);
}