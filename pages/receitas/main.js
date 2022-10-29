let nome = "Samuel"; // variável global
let sobrenome = "Silva"; // variável global

let resultado = nome || sobrenome; // saída: Samuel

console.log(resultado);// Samuel

let primeiroNome = ""; // false
let nomeCompleto = "Samuel Silva";// || "Fulano de Tal";

console.log(primeiroNome || nomeCompleto); // João Silva

localStorage.setItem("nome", nome);
