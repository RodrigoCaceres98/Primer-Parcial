
let comentarioId = document.getElementById('respuesta');
let agradecimiento = document.getElementById('agradecimiento')
let cajaTexto = document.getElementById('exampleFormControlTextarea1')


 //Funcion de redireccionamiento a menu de index
 const redireccionarAdetalles = () => {
    location.href = './detalles.html'
 }

 //Agregar Clase que diga el comentario fue envia en Contactos
 const agregarClase = (elemento, clase ) => {
    elemento.classList.add(clase)
    agradecimiento.innerHTML = 'Gracias por tu comentario'
    cajaTexto.value = ''
 }

 document.getElementById('botonForm').onclick = function(){
    agregarClase(comentarioId, 'comentario')
    console.log('tocaste el boton')
} 
 
