//*galeria de imagenes
function changeImage(src) {
	document.getElementById('mainImage').src = src;
}
//*alerta de formulario
if (document.getElementById('form')) {
document.getElementById('form').addEventListener('submit', function(event) {

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (name === '' || email === '' || message === '') {
    alert('Por favor, llene todos los campos');
    event.preventDefault();
  }
});
}
//*botones para copiar
const botones = document.querySelectorAll('.copiar-texto');
// Agrega un evento de clic a cada botón
botones.forEach(function(boton) {
  boton.addEventListener('click', function() {
    // Selecciona el contenedor actual
    const contenedor = boton.parentNode;
    // Selecciona el elemento de texto oculto dentro del contenedor actual
    const textoOculto = contenedor.querySelector('.texto-oculto');
    // Crea un elemento de texto temporal
    const textoTemporal = document.createElement('textarea');
    textoTemporal.value = textoOculto.textContent;
    // Agrega el elemento de texto temporal al cuerpo del documento
    document.body.appendChild(textoTemporal);
    // Selecciona el texto temporal
    textoTemporal.select();
    // Copia el texto al portapapeles
    document.execCommand('copy');
    // Elimina el elemento de texto temporal
    document.body.removeChild(textoTemporal);
    // Agrega la alerta
    alert('Texto copiado con éxito!');
  });
});

