// CREO LAS VARIABLES DE LOS ELEMENTOS QUE REQUIEREN FUNCIONALIDAD

var boton = document.getElementById('button');
var comentaAqui = document.getElementById('comentaAqui');
var maximoCaracteres = document.getElementById('maximo_caracteres');

// ESTE EVENTO COMPRUEBA QUE EL BOTÓN SE MANTENGA DESACTIVADO, MIENTRAS NO SE ESCRIBA NADA EN EL TEXTAREA

/*comentaAqui.addEventListener("focus", function() {
  if (comentaAqui.value.length === 0 || comentaAqui === null) {
    button.setAttribute("disabled", "disabled");
  }
  /*else {
    button.setAttribute("enabled", "enabled");
  }

  /*if (textarea.value.length === 0) {
    button.setAttribute("disabled", "disabled");
  }
})*/


// EVENTO DE BOTON QUE "ESCUCHARA" CUANDO EL USUARIO HAGA CLICK EN EL BOTON "Manda tu tweet!"

/*boton.addEventListener("click", function(){
  
})*/

boton.addEventListener("click", function() {
  var comentaAqui = document.getElementById('inputname').value; // Crea variable, llamandola por su ID y rescata su valor (lo que escribió el usuario)
  document.getElementById('inputname').value = ""; // Esto LIMPIA EL TEXT AREA!
  /*document.getElementById('comentariofinal');*/
  var nuevoComentario = document.createElement('div');// CREA UN CONTENEDOR PARA LOS COMENTARIOS!
  nuevoComentario.classList.add('principa');
  var nuevoComentario = document.createElement('div');// CREA UN CONTENEDOR PARA LOS COMENTARIOS!
  nuevoComentario.classList.add('cajacomentario');
  var nuevoComentario = document.createElement('div');// CREA UN CONTENEDOR PARA LOS COMENTARIOS!
  nuevoComentario.classList.add('user');
  var contenidoNuevoComentario = document.getElementById('#comentariosfinal');

  /* ESTO SE VA CREANDO EN ORDEN, EL HTML SOLO SERVIRÁ DE REFERENCIA!!!
  SE VA CREANDO DE ADENTRO HACIA AFUERA*/
  
  var user = document.createElement('h3');
  var link = document.createElement('a');
  link.href = "https://";
  link.textContent = "";
  user.appendChild(link);
  link.setAttribute('href', '');
  user.classList.add('color');
  var nodeText = document.createTextNode(comentaAqui); // ESTO DEBE CREAR (DEFINIR) UN NODO DE TEXTO
  link.appendChild(nodeText);

  

  nuevoComentario.appendChild(user);
  comentariofinal.appendChild(nuevoComentario);


  var comentaAqui2 = document2.getElementById('comenta_aqui').value; // Crea variable, llamandola por su ID y rescata su valor (lo que escribió el usuario)
  document2.getElementById('comenta_aqui').value = ""; // Esto LIMPIA EL TEXT AREA!
  /*document.getElementById('comentariofinal');*/
  var nuevoComentario2 = document2.createElement('p');// CREA UN CONTENEDOR PARA LOS COMENTARIOS!
  var nuevoComentario2 = document2.createElement('p');// CREA UN CONTENEDOR PARA LOS COMENTARIOS!
  nuevoComentario2.classList.add('comenta_aqui');
  var contenidoNuevoComentario2 = document2.getElementById('comenta_aqui');



  var nodeText2 = document2.createTextNode(comentaAqui2); // ESTO DEBE CREAR (DEFINIR) UN NODO DE TEXTO
  link.appendChild(nodeText2);

  

  nuevoComentario2.appendChild(comentaAqui2);
  comentariofinal2.appendChild(nuevoComentario2);
  
  
// ESTE EVENTO COMPRUEBA QUE EL BOTÓN SE MANTENGA DESACTIVADO, MIENTRAS NO SE ESCRIBA NADA EN EL TEXTAREA

  comentaAqui.addEventListener("click", function() {
    if (comentaAqui.value.length === 0 || comentaAqui === null) {
      button.setAttribute("disabled", "disabled");
    }
  })
  
  
})
  // ESTE EVENTO COMPRUEBA QUE EL BOTÓN SE MANTENGA DESACTIVADO, MIENTRAS NO SE ESCRIBA NADA EN EL TEXTAREA

 /* comentaAqui.addEventListener("focus", function() {
    if (comentaAqui.value.length === null || comentaAqui === null) {
      button.setAttribute("disabled", "disabled");
    }
  })*/