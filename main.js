var form = document.querySelector(".formulario");
var array = []; //cria um array vázio

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  //   console.log(evento.target[0].value);
  var nome = evento.target.elements["nome"].value;
  var idade = evento.target.elements["idade"].value;
  var sexo = evento.target.elements["sexo"].value;

  criaElemento(nome, idade, sexo);
});

var criaElemento = (nome, idade, sexo) => {
  var novaLi1 = document.createElement("li");
  novaLi1.classList.add("item"); //adiciona uma classe chama item ao elemento li
  var novaLi2 = document.createElement("li");
  novaLi2.classList.add("item"); //adiciona uma classe chama item ao elemento li
  var novaLi3 = document.createElement("li");
  novaLi3.classList.add("item"); //adiciona uma classe chama item ao elemento li
  var lista = document.querySelector(".lista");
  lista.appendChild(novaLi1);
  novaLi1.innerHTML += nome;
  lista.appendChild(novaLi2);
  novaLi2.innerHTML += idade;
  lista.appendChild(novaLi3);
  novaLi3.innerHTML += sexo;

  var objeto = {
    nome: nome,
    idade: idade,
    sexo: sexo,
  };

  array.push(objeto); //comando .push joga o objeto dentro do array

  localStorage.setItem("conjunto", JSON.stringify(array)); //comando JSON.stringify serve para
};

//SALVAR VARIÁVEIS NO LocalStorage
//localStorage.setItem("chave", "valor") serve para inserir uma informação, como é um objeto eu preciso de uma chave e valor
//localStorage.chave trás a string "chave"
//localStorage.getItem("chave") trás a string "valor" pois o comando getItem busca o valor da chave
//localStorage.removeItem("chave") deleta a informação
//localSorage.clear() deleta tudo
//para verificar os dados salvos no localStorage navegar até Application
