
function reubicacion() {
    let particiones = document.querySelectorAll(".particion");

    let inicio = 0;
    let fin=0;
    let instruciones_x_mega = 32768;

    let puntitos="\A...\A...\A...\A...\A...\A...\A...\A...\A...\A...\A...\A...\A...\A...\A...\A...";
    particiones.forEach(particion => {
        // cogemos le valor de la pestaña derecha
        let valueAfter = getComputedStyle(particion.querySelector(".pestana-derecha"), "::after").getPropertyValue('content');
        let size=valueAfter.slice(1,2);
        // aqui calculamos el fin de la particion actual 
        fin= size*instruciones_x_mega+inicio-1;
        let nuevosPuntitos=inicio+puntitos;
        console.log("valor "+nuevosPuntitos);


        let valueAfterIzquierda = getComputedStyle(particion.querySelector(".info-izq"), "::after").getPropertyValue('content');
        valueAfterIzquierda
        inicio=size*instruciones_x_mega;// actualizacion valores para la siguiente particion
    });

    
}

reubicacion();