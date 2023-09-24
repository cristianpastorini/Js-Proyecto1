function simuladorDeEntradas(){
    let nombre = prompt("Ingrese su nombre:");
    alert('Bienvenidos/as ' + nombre + ' a Tus Entradas ');
    
    let  opcionesParaElegir = prompt("Elegí una opción: \n1 - Recitales \n2 - Futbol \n3 -  Presioná 0 para finalizar. ");
    
    let valorEntradasRecitales = 80000;
    let valorEntradasFutbol = 50000;
    let precioTotalDeEntradas;

    while (opcionesParaElegir < 0 || opcionesParaElegir > 2) {
        alert("Opción inválida");
        opcionesParaElegir = prompt("Elegí una opción: \n1 - Recitales \n2 - Futbol \n3 -  Presioná 0 para finalizar. ");
        }
    switch (opcionesParaElegir) {

        //simulador de entradas de recitales
        case '1':
            let recital1 = parseInt(prompt("Estos son los recitales disponibles: \n1 - La Renga \n2 - Ciro \n3 -  Presioná 0 para finalizar. "));
            while (recital1 < 0 || recital1 > 2) {
                alert("Opción inválida");
                recital1 = parseInt(prompt("Estos son los recitales disponibles: \n1 - La Renga \n2 - Ciro \n3 -  Presioná 0 para finalizar. "));
            }
            if (recital1 === 1) {
                let cantidadEntradas = parseInt(prompt("Elegiste recital de La Renga en Estadio Obras, Ingrese la cantidad de entradas:"));
                precioTotalDeEntradas = valorEntradasRecitales * cantidadEntradas;
                alert ("el precio total es: $" + precioTotalDeEntradas + "Muchas gracias." );
                break;
            }
            else if (recital1 === 2) {
                let cantidadEntradas = parseInt(prompt("Elegiste recital de Ciro en Estadio Obras, Ingrese la cantidad de entradas:"));
                precioTotalDeEntradas = valorEntradasRecitales * cantidadEntradas;
                alert ("el precio total es: $" + precioTotalDeEntradas + "Muchas gracias." );
            break;
            } 
            else if (recital1 === 0) {
                alert ("hasta la proxima");
            break;
            } 
            else {
            alert("Opción inválida");
            break;
            }

        case '2':
        // simulador de entradas de futbol

            let futbol = parseInt(prompt("Estos son los partidos de la fecha: \n1 - Racing vs Independiente \n2 - River vs Boca \n3 -  Presioná 0 para finalizar. "));

            while (futbol < 0 || futbol > 2) {
                alert("Opción inválida");
                futbol = parseInt(prompt("Estos son los partidos de la fecha: \n1 - Racing vs Independiente \n2 - River vs Boca \n3 -  Presioná 0 para finalizar. "));
            }
            
            if (futbol === 1) {
                let cantidadEntradas = parseInt(prompt("Elegiste el partido de Racing vs Independiente , Ingrese la cantidad de entradas:"));
                precioTotalDeEntradas = valorEntradasFutbol * cantidadEntradas;
                alert ("el precio total es: $" + precioTotalDeEntradas  + "Muchas gracias.");
                break;
            }
            else if (futbol === 2) {
                let cantidadEntradas = parseInt(prompt("Elegiste el partido de River vs Boca, Ingrese la cantidad de entradas:"));
                precioTotalDeEntradas = valorEntradasFutbol * cantidadEntradas;
                alert ("el precio total es: $" + precioTotalDeEntradas + "Muchas gracias.");
            break;
            } 
            else if (futbol === 0) {
                alert ("hasta la proxima");
            break;
            } else {
            alert("Opción inválida");
            break;
            }
        }

        /* console.log(simuladorDeEntradas);
        }*/
        simuladorDeEntradas();
    }
