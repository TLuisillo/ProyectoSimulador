const formulario = document.querySelector('#form')
const $buttonMailto = document.querySelector('#conexion');
const boton = document.querySelector('#btn-submit');

form.addEventListener('submit', handleSumbmit)

function handleSumbmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    $buttonMailto.setAttribute('href', `mailto:correoEjemplo@gmail.com?subject=Nombre: ${form.get('name')} --- Correo: ${form.get('mail')}&body=${form.get('message')}`);
    $buttonMailto.click();
}




