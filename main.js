const nombre = document.querySelector('.nombre')
const numero = document.querySelector('.numero')
const correo = document.querySelector('.correo')
const agregar = document.querySelector('.guardar-contacto')

const listaContactos = document.querySelector('.listaContactos')

const local = window.localStorage


agregar.onclick = () => {
    let contacto = {
        id: Math.random(1,100),
        nombre: nombre.value,
        numero: numero.value,
        correo: correo.value,
    }
    guardarContacto (local, contacto)
}

cargarContactos(local, listaContactos)