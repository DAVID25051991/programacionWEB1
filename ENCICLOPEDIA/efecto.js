const buttons1 = document.querySelectorAll('.btn1');
const textElements1 = document.querySelectorAll('.hideText1');
//Aquí se están seleccionando todos los botones y todos los elementos de texto que se van a mostrar/ocultar correspondientes al primer conjunto de botones.
buttons1.forEach((button, index) => {
  button.addEventListener('click', () => {
    hideAllTextElements();
    const textElement1 = textElements1[index];
    textElement1.classList.toggle('showText');
  });
});
//Aquí se está agregando un evento de clic a cada botón del primer conjunto de botones, de manera que al hacer clic en el botón correspondiente se oculten todos los elementos de texto y se muestre el elemento de texto correspondiente a ese botón en particular.
const buttons2 = document.querySelectorAll('.btn2');
const textElements2 = document.querySelectorAll('.hideText2');
//Aquí se están seleccionando todos los botones y todos los elementos de texto que se van a mostrar/ocultar correspondientes al segundo conjunto de botones.
buttons2.forEach((button, index) => {
  button.addEventListener('click', () => {
    hideAllTextElements();
    const textElement2 = textElements2[index];
    textElement2.classList.toggle('showText');
  });
});
//Aquí se está agregando un evento de clic a cada botón del segundo conjunto de botones, de manera que al hacer clic en el botón correspondiente se oculten todos los elementos de texto y se muestre el elemento de texto correspondiente a ese botón en particular.
const buttons3 = document.querySelectorAll('.btn3');
const textElements3 = document.querySelectorAll('.hideText3');
//Aquí se están seleccionando todos los botones y todos los elementos de texto que se van a mostrar/ocultar correspondientes al tercer conjunto de botones.
buttons3.forEach((button, index) => {
  button.addEventListener('click', () => {
    hideAllTextElements();
    const textElement3 = textElements3[index];
    textElement3.classList.toggle('showText');
  });
});
//Aquí se está agregando un evento de clic a cada botón del tercer conjunto de botones, de manera que al hacer clic en el botón correspondiente se oculten todos los elementos de texto y se muestre el elemento de texto correspondiente a ese botón en particular.
function hideAllTextElements() {
  textElements1.forEach(textElement => {
    textElement.classList.remove('showText');
  });
  textElements2.forEach(textElement => {
    textElement.classList.remove('showText');
  });
  textElements3.forEach(textElement => {
    textElement.classList.remove('showText');
  });
}
//Esta es una función que se utiliza en los tres conjuntos de botones para ocultar todos los elementos de texto antes de mostrar el elemento de texto correspondiente al botón que se ha hecho clic. La función recorre cada conjunto de elementos de texto y los oculta eliminando la clase 'showText' de cada uno.