let listaContactos= ["Jhojan Mora", "Anderson Mora", "Katherine Quevedo"];
//console.log (listaContactos);
//console.log (listaContactos.length);

function AgregarContacto (nombreCompleto){
    listaContactos.push(nombreCompleto);
}
AgregarContacto("Mateo Mora");
AgregarContacto("Juanita Morales");
AgregarContacto("Cecilia Bohórquez");
//console.log (listaContactos.length);

function EliminarContacto (nombre){
    listaContactos.splice(listaContactos.indexOf(nombre),1)
}
EliminarContacto ("Mateo Mora");
console.log(listaContactos);
