let lista_amigos = []; //Array que almacenara los amigos ingresados

//Funcion para agregar amigos a la lista

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

//Funcion para limpiar campo de texto
function limpiarCaja() {
  document.getElementById("amigo").value = "";
}
