function somar(numero1, numero2) {
  if (typeof numero1 != "number") {
    return "erro";
  }
  return numero1 + numero2;
}

// pra outra parte do sistema importar a calculadora e usar a funcao somar
exports.somar = somar;

// common JS
