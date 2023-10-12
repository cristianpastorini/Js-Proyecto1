let valorEntradasRecitales = 65693 ;
let valorEntradasFutbol = 35489;
let recitales = [
    { nombre: "La Renga", estadio: "Estadio Obras" },
    { nombre: "Ciro", estadio: "Estadio Obras" }
];
let partidos = [
    { nombre: "Racing vs Independiente" },
    { nombre: "River vs Boca" }
];
function simuladorDeEntradas() {
    let nombre = prompt("Ingrese su nombre:");
    alert('Bienvenidos/as ' + nombre + ' a Tus Entradas ');
    let opcionesParaElegir = prompt("Elegí una opción: \n1 - Recitales \n2 - Futbol \n0 -  Presioná 0 para finalizar. ");
    let precios = [valorEntradasRecitales, valorEntradasFutbol];
    let precioTotalDeEntradas = 0;
    let recitalSeleccionado = recitales;
    let partidoSeleccionado = partidos;
while (opcionesParaElegir < 0 || opcionesParaElegir > 2) {
    alert("Opción inválida, intente nuevamente!");
    opcionesParaElegir = prompt("Elegí una opción: \n1 - Recitales \n2 - Futbol \n0 -  Presioná 0 para finalizar. ");
    }
    switch (opcionesParaElegir) {
    case '1': // simulador de entradas de recitales
        recitalSeleccionado = parseInt(prompt("Estos son los recitales disponibles: \n1 - La Renga \n2 - Ciro \n0 -  Presioná 0 para finalizar. "));
        while (recitalSeleccionado < 0 || recitalSeleccionado > 2) {
        alert("Opción inválida, intente nuevamente!");
        recitalSeleccionado = parseInt(prompt("Estos son los recitales disponibles: \n1 - La Renga \n2 - Ciro \n0 -  Presioná 0 para finalizar. "));
        }
        if (recitalSeleccionado === 1 || recitalSeleccionado === 2) {
            let cantidadEntradas = parseInt(prompt("Elegiste recital de " + recitales[recitalSeleccionado - 1].nombre + " en " + recitales[recitalSeleccionado - 1].estadio + ", Ingrese la cantidad de entradas:"));
            precioTotalDeEntradas = valorEntradasRecitales * cantidadEntradas;
        alert("el precio total es: $ " + precioTotalDeEntradas);
        } else if (recitalSeleccionado === 0) {
        alert("hasta la proxima");
        return;
        } else {
        alert("Opción inválida, intente nuevamente!");
        return simuladorDeEntradas(); // Repirw la función
        }
        break;
    case '2': // simulador de entradas de futbol
        partidoSeleccionado = parseInt(prompt("Estos son los partidos de la fecha: \n1 - Racing vs Independiente \n2 - River vs Boca \n0 -  Presioná 0 para finalizar. "));
        while (partidoSeleccionado < 0 || partidoSeleccionado > 2) {
        alert("Opción inválida, intente nuevamente!");
        partidoSeleccionado = parseInt(prompt("Estos son los partidos de la fecha: \n1 - Racing vs Independiente \n2 - River vs Boca \n0 -  Presioná 0 para finalizar. "));
        }
        if (partidoSeleccionado === 1 || partidoSeleccionado === 2) {
        let cantidadEntradas = parseInt(prompt("Elegiste el partido de " + partidos[partidoSeleccionado - 1].nombre + ", Ingrese la cantidad de entradas:"));
        precioTotalDeEntradas = valorEntradasFutbol * cantidadEntradas;
        alert("el precio total es: $ " + precioTotalDeEntradas);
        } else if (partidoSeleccionado === 0) {
        alert("hasta la proxima");
        return;
        } else {
        alert("Opción inválida, intente nuevamente!");
        return simuladorDeEntradas(); // Repite la función
        }
        break;
    }
let formaDePago = '';
let formaDeRetiro = '';
    switch (parseInt(prompt("Selecciona la forma de pago: \n1 - Tarjeta de crédito \n2 - Transferencia bancaria \n0 - Presioná 0 para finalizar."))) { // Simulador de metodo de pago
    case 1:
        formaDePago = 'Tarjeta de crédito';
        break;
    case 2:
        formaDePago = 'Transferencia bancaria';
        break;
    case 0:
        alert("hasta la proxima");
        return;
    default:
        alert("Opción inválida, intente nuevamente!");
      return simuladorDeEntradas(); // Repite la función
    }
    switch (parseInt(prompt("Selecciona la forma de retiro: \n1 - Retiro en boletería \n2 - Envío a domicilio  \n0 - Presioná 0 para finalizar."))) { // simulador de forma de entrega
    case 1:
        formaDeRetiro = 'Retiro en boletería';
        break;
    case 2:
        formaDeRetiro = 'Envío a domicilio';
        break;
    case 0:
        alert("hasta la proxima");
        return;
    default:
        alert("Opción inválida, intente nuevamente!");
      return simuladorDeEntradas(); // Repite la función
    }
let cargoDelServicio = (precioTotalDeEntradas * 0.07 + precioTotalDeEntradas)
    cargoDelServicio = Math.ceil(precioTotalDeEntradas * 0.07 + precioTotalDeEntradas); //Es un objeto math
    alert("¡Muchas gracias por tu compra, " + nombre + "! . TusEntradas"); 
    let entradasSeleccionadas = (opcionesParaElegir === '1') ? recitales[recitalSeleccionado - 1].nombre : partidos[partidoSeleccionado - 1].nombre;
    alert("Detalles de la compra:\n" + 
    "Entradas compradas: " + entradasSeleccionadas + "\n" +
    "Precio total + Cargo del servicio : $" + cargoDelServicio + "\n" +
    "Forma de pago: " + formaDePago + "\n" +
    "Forma de retiro: " + formaDeRetiro);
}
simuladorDeEntradas();