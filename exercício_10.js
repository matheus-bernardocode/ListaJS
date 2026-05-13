function ex10() {
  let nome = prompt("Digite o nome do funcionário:");
  let salarioBruto = Number(prompt("Digite o salário bruto:"));

  let desconto = salarioBruto * 0.08;
  let salarioLiquido = salarioBruto - desconto;

  console.log("Funcionário:", nome);
  console.log("Salário bruto:", salarioBruto);
  console.log("Desconto INSS:", desconto);
  console.log("Salário líquido:", salarioLiquido);
}