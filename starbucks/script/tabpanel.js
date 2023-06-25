const tabButtons = document.querySelectorAll('.tab-button');
const tabs = document.querySelectorAll('.tab');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.getAttribute('data-tab');
    
    // Desactivar todos los botones y ocultar todos los tabs
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabs.forEach(tab => tab.classList.remove('active'));

    // Activar el botón seleccionado y mostrar el tab correspondiente
    button.classList.add('active');
    document.getElementById(tabId).classList.add('active');
  });
});