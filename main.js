var form = document.querySelector(".formulario");
var array = JSON.parse(localStorage.getItem("conjunto")) || []; //cria um array vázio

var criaElemento = (objeto) => {
  var novaLi1 = document.createElement("li");
  novaLi1.classList.add("nome"); //adiciona uma classe chama item ao elemento li
  var novaLi2 = document.createElement("li");
  novaLi2.classList.add("idade"); //adiciona uma classe chama item ao elemento li

  var novaLi3 = document.createElement("li");
  novaLi3.classList.add("sexo"); //adiciona uma classe chama item ao elemento li

  var lista = document.querySelector(".lista");

  lista.appendChild(novaLi1);
  novaLi1.innerHTML += objeto.nome;
  novaLi1.dataset.id = objeto.id;

  lista.appendChild(novaLi2);
  novaLi2.innerHTML += objeto.idade;
  novaLi2.dataset.id = objeto.id;

  lista.appendChild(novaLi3);
  novaLi3.innerHTML += objeto.sexo;
  novaLi3.dataset.id = objeto.id;
};

array.forEach((elemento) => {
  criaElemento(elemento);
});

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  //   console.log(evento.target[0].value);
  var nome = evento.target.elements["nome"].value;
  var idade = evento.target.elements["idade"].value;
  var sexo = evento.target.elements["sexo"].value;

  var existe = array.find((elemento) => elemento.nome === nome);

  // outra maneira de escrever a linha acima sem usar o comando find
  // array.forEach((elemento) => {
  //   if (elemento.nome === nome) {
  //     console.log(elemento);
  //   }
  // });
  var objeto = {
    nome: nome,
    idade: idade,
    sexo: sexo,
  };

  if (existe) {
    objeto.id = existe.id;

    atualizaElemento(objeto);
  } else {
    objeto.id = array.length;

    criaElemento(objeto);

    array.push(objeto); //comando .push joga o objeto dentro do array
  }

  localStorage.setItem("conjunto", JSON.stringify(array)); //comando JSON.stringify serve para
});

//SALVAR VARIÁVEIS NO LocalStorage
//localStorage.setItem("chave", "valor") serve para inserir uma informação, como é um objeto eu preciso de uma chave e valor
//localStorage.chave trás a string "chave"
//localStorage.getItem("chave") trás a string "valor" pois o comando getItem busca o valor da chave
//localStorage.removeItem("chave") deleta a informação
//localSorage.clear() deleta tudo
//para verificar os dados salvos no localStorage navegar até Application

var atualizaElemento = (objeto) => {
  document.querySelector(".idade").innerHTML = objeto.idade;
};
