var form = document.querySelector(".formulario");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  //   console.log(evento.target[0].value);
  var nome = evento.target.elements["nome"].value;
  var idade = evento.target.elements["idade"].value;
  var sexo = evento.target.elements["sexo"].value;
  criaElemento(nome, idade, sexo);
});

var criaElemento = (nome, idade, sexo) => {
  var novaLi = document.createElement("li");
  novaLi.classList.add("item"); //adiciona uma classe chama item ao elemento li
  var lista = document.querySelector(".lista");
  lista.appendChild(novaLi);

  var novoP = document.createElement("p");
  novoP.innerHTML += nome;
  novaLi.appendChild(novoP);
  novoP.innerHTML += idade;
  novaLi.appendChild(novoP);
  novoP.innerHTML += sexo;
  novaLi.appendChild(novoP);
};
