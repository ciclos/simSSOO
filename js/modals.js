document.addEventListener('DOMContentLoaded', () => {
    crearContenido();
});


function mostrarModal(id) {
    document.querySelector('.contenedor-dialogo').style.display = 'block';
    document.querySelector('#' + id).style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function cerrar(id) {
    document.querySelector('.contenedor-dialogo').style.display = 'none';
    document.querySelector('#' + id).style.display = 'none';
    document.body.style.overflow = 'visible';
}

function crearContenido() {
    let nombre;
    let tam;
    let opcionSelected;

    document.getElementById("create").addEventListener('click', function () {
        opcionSelected = document.getElementById("tipo").value;
        nombre = document.getElementById("name-process").value;
        tam = document.getElementById("size-process").value;
        if (nombre != "" && tam != "" && opcionSelected != "") {

            if (opcionSelected === "Proceso") {

                let contenedorProcesos = document.querySelector(".procesos_preparados");
                let procesoCreado = document.createElement("div");
                procesoCreado.classList.add("proceso");
                procesoCreado.classList.add("size" + tam);
                procesoCreado.draggable = true;
                procesoCreado.id = "p" + tam;

                let infoIzquierda = document.createElement("div");
                infoIzquierda.appendChild(document.createElement("span"));
                let nombreProceso = document.createElement("div");
                nombreProceso.classList.add("nombre-proceso");
                nombreProceso.innerHTML = `<p>${nombre}</p>`;

                procesoCreado.appendChild(infoIzquierda);
                procesoCreado.appendChild(nombreProceso);
                contenedorProcesos.appendChild(procesoCreado);
                
            } else if (opcionSelected === "Memoria") {
                let contenedorParticiones=document.querySelector(".mi_memoria");

                let particionCreada=document.createElement("div");
                particionCreada.classList.add("particion",`size${tam}`,"tooltip");

                let infoIzquierda = document.createElement("div");
                infoIzquierda.classList.add("info-izq","fuera");
                infoIzquierda.appendChild(document.createElement("span"));

                let spanTooltip=document.createElement("span");
                spanTooltip.classList.add("tooltiptext_derecha");
                spanTooltip.textContent=`Memoria disponible ${tam}MB`;

                let pestañaDerecha=document.createElement("div");
                pestañaDerecha.classList.add("pestana-derecha");


                particionCreada.appendChild(infoIzquierda);
                particionCreada.appendChild(spanTooltip);
                particionCreada.appendChild(pestañaDerecha);
                contenedorParticiones.appendChild(particionCreada);
                
            }
            console.log("DATOS VALIDOS")
        } else {
            console.error("faltan datos por rellenar");
        }



        limpiarModal();
        cerrar("add-proceso");
    });


}

function limpiarModal() {
    document.getElementById("name-process").value = "";
    document.getElementById("size-process").value = "";
    document.getElementById("tipo").value = "";
}



