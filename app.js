// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    let restriccion = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if(nombre !== "" && restriccion.test(nombre)) {
        amigos.push(nombre);
        actualizarListaAmigos();
        document.getElementById("amigo")
    } else {
        alert("Escribe un nombre valido por favor")
    }
}

function sortearAmigo() {
    if(amigos.length < 2) {
        alert("Se necesitan al menos 2 amigos");
        return
    }
    let ganador = amigos[Math.floor(Math.random()*amigos.length)];
    document.getElementById("resultado").textContent = ganador;
}

function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
  
    for (let amigo of amigos) {
      let item = document.createElement("li");
      item.textContent = amigo;
      lista.appendChild(item);
    }
  }