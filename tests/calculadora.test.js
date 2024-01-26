// importar model calculadora para os testes
const calculadora = require("../models/calculadora.js");

test("somar 5 + 100, deveria retornar 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("somar 2 + 2, deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 'banana' + 100 , deveria retornar  'erro' ", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("erro");
});

//---------------------------------------------------------------------------------------------
// Teste de Teste - entendimento

// test("espero q 1 seja 1", () => {
//   expect(2).toBe(1);
//   //     Expected: 1 = toBe
//   //     Received: 2 = o que ta no expected
// });

// test("nome do teste", callbackFunction); // dois argumentos: string, callback function

// function callbackFunction() {
//   console.log("ta rodando?");
// }

// test("nome do teste", function () {
//   console.log("ta rodando anonima?");
// }); //funcao anonima

// test("nome do teste", () => {
//   console.log("ta rodando arrow function?");
// }); //arrow function

// test("teste de outra funcao", () => {
//   console.log("teste 2");
// });
