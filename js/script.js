let valorEntradasRecitales = 65693;
let valorEntradasFutbol = 35489;
let recitales = [
    { nombre: "La Renga", estadio: "Estadio Obras" },
    { nombre: "Ciro", estadio: "Estadio Obras" }
];
let partidos = [
    { nombre: "Racing vs Independiente", estadio:"Presidente Peron" },
    { nombre: "River vs Boca", estadio: "Mas monumental" }
];
/* const video = document.getElementById('backgroundvideo');
video.autoplay = true;
video.loop = true;
video.muted = true; */

document.addEventListener("DOMContentLoaded", function() {
    const recitalesListElement = document.getElementById("recitalesList");
    const partidosListElement = document.getElementById("partidosList");
    const comprarEntradaButton = document.getElementById("comprarEntradaButton");
    const detalleCompraElement = document.getElementById("detalleCompra");
// esta funcion crea los botones de los recitales
recitales.forEach(function(recital) {
    const button = document.createElement("button");
    button.textContent = "Entradas para " + recital.nombre;
    button.addEventListener("click", function() {
            mostrarFormulario(recital.nombre, recital.estadio, valorEntradasRecitales);
    });
    recitalesListElement.appendChild(button);
    });
// esta funcion crea los botones de los partidos
partidos.forEach(function(partido) {
    const button = document.createElement("button");
    button.textContent = "Entradas para " + partido.nombre;
    button.addEventListener("click", function() {
            mostrarFormulario(partido.nombre, partido.estadio, valorEntradasFutbol);
        });
        partidosListElement.appendChild(button);
    });
// esta es la funcion que muestra la compra
function mostrarFormulario(evento, estadio, valorEntrada) {
    const formularioElement = document.createElement("div");
    formularioElement.innerHTML = `
        <label for="cantidadEntradas">Ingrese la cantidad de Entradas:</label>
        <input type="number" id="cantidadEntradas" min="1" required>
        <button id="confirmarCompraButton">Aqui Confirme su Compra</button>
        `;
    detalleCompraElement.textContent = "";
    detalleCompraElement.appendChild(formularioElement);
const confirmarCompraButton = document.getElementById("confirmarCompraButton");
            confirmarCompraButton.addEventListener("click", function() {
const cantidadEntradas = parseInt(document.getElementById("cantidadEntradas").value);
const precioTotal = valorEntrada * cantidadEntradas;
const formaDePago = document.getElementById("formaDePagoSelect").value;
const formaDeRetiro = document.getElementById("formaDeRetiroSelect").value;
const detalleCompra = "Evento: " + evento + "\n" + "/ Estadio: " + estadio + "\n" + "/ Cantidad de Entradas: " + cantidadEntradas + "\n" + "/ Precio Total: $" + precioTotal + "\n" + 
"/ Forma de Pago: " + formaDePago + "\n" + "/ Forma de Retiro: " + formaDeRetiro;
    detalleCompraElement.textContent = detalleCompra; 
// este storage guarda la informacion de la compra
const compra = {
    evento,
    estadio,
    cantidadEntradas,
    precioTotal,
    formaDePago,
    formaDeRetiro
        };
    localStorage.setItem("compra", JSON.stringify(compra));
        });
    }   
//recupera los datos y los muestra en el localsto.. 
const storedCompra = JSON.parse(localStorage.getItem("compra"));
    if (storedCompra) {
    const detalleCompra = "Evento: " + storedCompra.evento + "\n" + "/ Estadio: " + storedCompra.estadio + "\n" + "/ Cantidad de Entradas: " + storedCompra.cantidadEntradas + "\n" + "/ Precio Total: $" + storedCompra.precioTotal + "\n" + "/ Forma de Pago: " + storedCompra.formaDePago + "\n" + "/ Forma de Retiro: " + storedCompra.formaDeRetiro;
    detalleCompraElement.textContent = detalleCompra;
    }
    window.addEventListener("beforeunload", function() {
    localStorage.removeItem("compra");
    });
});