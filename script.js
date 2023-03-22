const input = document.querySelector("#input");
const bAdd = document.querySelector("#add");
const bRemove = document.querySelector("#remove")
const bLimpar = document.querySelector("#limpar")
const lista = document.querySelector("#lista");


/*  bAdd.addEventListener("click", (event) => {
  lista.innerHTML += `<li>${input.value}</li>`;
});  */



bAdd.addEventListener("click", (adicionaAoFim));

bRemove.addEventListener("click", (removePrimeiro));

bLimpar.addEventListener("click", (limparTudo));

function adicionaAoFim(){
  const novoItem = document.createElement("li");
  novoItem.textContent = input.value;
  lista.appendChild(novoItem);
}

function removePrimeiro(){
  const ultimoItem = lista.lastElementChild;
  lista.removeChild(ultimoItem);
}

function limparTudo(){
  
}

document.addEventListener('click', function (lista) {
  var target = lista.target;
  var parent = target.parentNode;
  var index = parseInt([].indexOf.call(parent.children, target));
  document.getElementById("index").innerHTML = index
  document.querySelector("ol[0]").style.color = "blue"
});




// const itensExistentes = document.querySelectorAll("li");

// bAdd.addEventListener("click", (adicionaAoFim));


/* bAdd.addEventListener("click", () => {
  window.alert("Você clicou no botão Adicionar!");
}); */

/* input.addEventListener("input", (event) => {
  console.log(event.target.value);
}); */

  