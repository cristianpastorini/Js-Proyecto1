let valorEntradasRecitales = 65693;
let valorEntradasFutbol = 35489;
let recitales = [
    { nombre: "La Renga", estadio: "Estadio Obras" },
    { nombre: "Ciro", estadio: "Estadio Obras" }
];
let partidos = [
    { nombre: "Racing vs Independiente" },
    { nombre: "River vs Boca" }
    
];
let formaDePago = [1 , 2 , 0 ];
let formaDeRetiro = [1 , 2 , 0 ];
let precioTotalDeEntradas = 0;
let nombrecompleto = '';
let opcionesParaElegir = [1 , 2 , 0 ];
let cantidadEntradas = '';

function simuladorDeEntradas() {
    let nombrecompleto = prompt("Ingrese su nombre:");
    alert("Bienvenidos/as " + nombrecompleto + " a Tus Entradas ");
    let opcionesParaElegir = prompt("Elegí una opción: \n1 - Recitales \n2 - Futbol \n0 -  Presioná 0 para finalizar. ");
    let precioTotalDeEntradas = [valorEntradasRecitales, valorEntradasFutbol];
    let recitalSeleccionado = recitales;
    let partidoSeleccionado = partidos;
    while (opcionesParaElegir < 0 || opcionesParaElegir > 2) {
        alert("Opción inválida, intente nuevamente!");
        opcionesParaElegir = prompt("Elegí una opción: \n1 - Recitales \n2 - Futbol \n0 -  Presioná 0 para finalizar. ");
    }
    switch (opcionesParaElegir) {
        case '1':
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
                return simuladorDeEntradas();
            }
            break;
        case '2':
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
                return simuladorDeEntradas();
            }
            break;
    }
    simuladorFormaDePago();
function simuladorFormaDePago() {
    switch (parseInt(prompt("Selecciona la forma de pago: \n1 - Tarjeta de crédito \n2 - Transferencia bancaria \n0 - Presioná 0 para finalizar."))) {
        case 1:
            formaDePago = "Tarjeta de crédito";
            break;
        case 2:
            formaDePago = "Transferencia bancaria";
            break;
        case 0:
            alert("hasta la proxima");
            return;
        default:
            alert("Opción inválida, intente nuevamente!");
            return simuladorFormaDePago();
    }
    simuladorFormaDeRetiro();
}
function simuladorFormaDeRetiro() {   
    switch (parseInt(prompt("Selecciona la forma de retiro: \n1 - Retiro en boletería \n2 - Envío a domicilio  \n0 - Presioná 0 para finalizar."))) {   
        case 1:     
            formaDeRetiro = "Retiro en boletería";         
            break;       
        case 2:     
            formaDeRetiro = "Envío a domicilio";     
            break;       
        case 0:        
            alert("hasta la proxima");      
            return;      
        default:        
            alert("Opción inválida, intente nuevamente!");     
            return simuladorFormaDeRetiro(); 
    }
        let cargoDelServicio = Math.ceil(precioTotalDeEntradas * 0.07 + precioTotalDeEntradas);
        alert(`¡Muchas gracias por tu compra ` + nombrecompleto + `! TusEntradas. \n ---------------------------------------------------------
        \nPrecio total + Cargo del servicio: $${cargoDelServicio} 
        \nForma de pago: ${formaDePago} 
        \nForma de retiro: ${formaDeRetiro}`)  ;
    }    
}
simuladorDeEntradas();