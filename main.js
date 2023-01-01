var form = document.querySelector(".formulario");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  //   console.log(evento.target[0].value);
  var nome = evento.target.elements["nome"].value;
  var idade = evento.target.elements["idade"].value;
  var sexo = evento.target.elements["sexo"].value;
  criaElemento(nome);
  criaElemento(idade);
  criaElemento(sexo);
});

var criaElemento = (x) => {
  var novaLi = document.createElement("li");
  novaLi.classList.add("item"); //adiciona uma classe chama item ao elemento li
  var lista = document.querySelector(".lista");
  lista.appendChild(novaLi);
  novaLi.innerHTML += x;
};
