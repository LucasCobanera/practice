// let paginas = {
//     "pagina-1": {
//         "nombre": "Horizon Zero Dawn",
//         "url": "sadada"
//     },
//     "pagina-2": {
//         "nombre": "Conversor",
//         "url": "sadasdasd"
//     }
// }
// function mostrar() {
//     let titulo = document.getElementById("titulo");
//     titulo.textContent = paginas["pagina-1"].url
// }

function mostrar() {
    let titulo = document.getElementById("titulo");
    let imagen = document.getElementById("imagen");
    fetch("./paginas.json")
        .then(respuesta => respuesta.json())
        .then((salida) => {
            titulo.textContent = salida["pagina-1"].url
            imagen.setAttribute("src", salida["pagina-1"].imagen)
        })
}
