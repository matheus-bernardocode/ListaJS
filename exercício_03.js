function ex3() {
  let ganhoAnual = 0;
  let gastoAnual = 0;

  for (let i = 1; i <= 12; i++) {
    let ganho = Number(prompt(`Digite o ganho do mês ${i}:`));
    let gasto = Number(prompt(`Digite o gasto do mês ${i}:`));

    ganhoAnual += ganho;
    gastoAnual += gasto;
  }

  let saldo = ganhoAnual - gastoAnual;

  console.log("Ganho anual:", ganhoAnual);
  console.log("Gasto anual:", gastoAnual);
  console.log("Saldo anual:", saldo);

  if (saldo > 0) {
    console.log("Lucro");
  } else {
    console.log("Prejuízo");
  }
}