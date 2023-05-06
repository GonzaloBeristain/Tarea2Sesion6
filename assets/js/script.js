let botonBorrar = document.getElementById("botonBorrar");
let botonAgregar = document.getElementById("botonAgregar");
let agregar2 = document.getElementById("here");
let arrayNombres = [];
let enter1 = document.getElementById("inputAdd");
let enter2 = document.getElementById("inputDelete");

let escribir = () => {
    let agregar = document.getElementById("inputAdd").value;
    if (agregar != "") {
    arrayNombres.push(agregar);
    agregar2.innerText = arrayNombres;
    }    

    limpiar()
}

let borrar = () => {
    let borrar = document.getElementById("inputDelete").value;
    let buscarIndice = arrayNombres.indexOf(borrar);
    arrayNombres.splice(buscarIndice, 1);
    agregar2.innerText = arrayNombres;
}

let limpiar = () => {
    document.getElementById("inputAdd").value = "";
    document.getElementById("inputDelete").value = "";
}

botonAgregar.addEventListener("click", escribir)
botonBorrar.addEventListener("click", borrar)
enter1.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
    escribir();
    limpiar();
}
});
enter2.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
    borrar();
    limpiar();
}
});
