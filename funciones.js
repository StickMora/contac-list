const guardarContacto = (local, contacto) =>{
    local.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = '/'
}

const cargarContactos = (local, parentNode) =>{
    let claves = Object.keys(local)  
    for (clave of claves){
        let contacto = JSON.parse(local.getItem(clave))
        crearContacto(parentNode, contacto, local)
    }
}
const crearContacto = (parentNode, contacto, local) =>{
    
    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let numeroContacto = document.createElement('h3')
    let correoContacto = document.createElement('h3')
    let iconoBorrar = document.createElement('span')

    nombreContacto.innerHTML = contacto.nombre
    numeroContacto.innerHTML = contacto.numero
    correoContacto.innerHTML = contacto.correo
    iconoBorrar.innerHTML = 'delete'

    divContacto.classList.add('lista')
    iconoBorrar.classList.add('material-symbols-outlined', 'icono')

    iconoBorrar.onclick = () => {
    local.removeItem(contacto.id)
    window.location.href ='/'
    }

    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(correoContacto)
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)
}