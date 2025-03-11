let lista_amigos = []; //Array que almacenara los amigos ingresados

//Función para agregar amigos a la lista

function agregarAmigo() {
  let amigoIngreso = document.getElementById("amigo").value.trim(); //Capturamos el valor del input con el cual interactuo el usuario

  if (amigoIngreso === "") {
    alert("Por favor, inserte un nombre"); //Muestra el mensaje si el cuadro de texto esta vacio
  }

  if (lista_amigos.includes(amigoIngreso)) {
    alert("El nombre ya está en la lista"); //Evitamos que los nombres se dupliquen
    return;
  }

  lista_amigos.push(amigoIngreso); //Se agrega el amigo al array
  limpiarCaja(); //Servira para limpiar el campo de texto
  actualizarLista(); //Actualiza la lista
}

//Función para limpiar campo de texto
function limpiarCaja() {
  document.getElementById("amigo").value = "";
}

//Función para actualizar la lista de amigos

function actualizarLista() {
  let lista = document.getElementById("listaAmigos"); //Tenemos acceso a la ul que se modificara
  lista.innerHTML = ""; //Se limpia para evitar duplicados

  for (let i = 0; i < lista_amigos.length; i++) {
    let li = document.createElement("li"); //Se crea una nueva 'li' para cada amigo ingresado
    li.textContent = lista_amigos[i]; //Se asigna texto a cada 'li'
    lista.appendChild(li); //Mostramos los cambios
  }
}

//Función para sortear los amigos

function sortearAmigo() {
  if (lista_amigos.length === 0) {
    alert("La lista esta vacia"); //Aviso que muestra lista vacia
    return;
  }

  //Generando un indice aleatorio para obtener el amigo ganador
  let indiceAleatorio = Math.floor(Math.random() * lista_amigos.length);
  let amigoSorteado = lista_amigos[indiceAleatorio]; //Se obtiene el amigo sorteado mediante su indice
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `El amigo secreto es:<strong>${amigoSorteado}</strong>`;
}
