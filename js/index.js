const formulario = document.querySelector('#form')
const boton =  document.querySelector('#btn-submit');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const fromData = FormData(form);
});

boton.addEventListener('click', function () {
    alert('Mensaje Enviado Correctamente');
});