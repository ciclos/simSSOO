
let cantidadProcesos=2;
function mostrarModal(id, modal) {
    document.querySelector('#' + modal).style.display = 'block';

    document.body.style.overflow = 'hidden';
}

function cerrar(id, modal) {
    document.querySelector('#' + modal).style.display = 'none';
    document.body.style.overflow = 'visible';
}
function crearProceso() {
    cantidadProcesos++;
    let contenedorProcesos = document.querySelector(".procesos_preparados");
    const nombre = document.getElementById("name-process").value;
    const tam = document.querySelector('input[name="proceso"]:checked').value;

    let procesoCreado = document.createElement("div");
    procesoCreado.classList.add("proceso");
    procesoCreado.classList.add("size" + tam);
    procesoCreado.draggable = true;
    procesoCreado.id = "p" + cantidadProcesos;

    let infoIzquierda = document.createElement("div");
    infoIzquierda.classList.add("info-izq");
    infoIzquierda.appendChild(document.createElement("span"));
    let nombreProceso = document.createElement("div");
    nombreProceso.classList.add("nombre-proceso");
    nombreProceso.innerHTML = `<p>${nombre}</p>`;

    procesoCreado.appendChild(infoIzquierda);
    procesoCreado.appendChild(nombreProceso);
    contenedorProcesos.appendChild(procesoCreado);

    procesoCreado.addEventListener("dragstart",
            function (event){
                event.dataTransfer.setData("text", event.target.id);
            });
    document.getElementById("name-process").value = "";
    cerrar("add-proceso", "procesos");
}
function crearParticion() {

        const tam = document.querySelector('input[name="particion"]:checked').value;
        let contenedorParticiones = document.querySelector(".mi_memoria");

        let particionCreada = document.createElement("div");
        particionCreada.classList.add("particion", `size${tam}`, "tooltip");

        let infoIzquierda = document.createElement("div");
        infoIzquierda.classList.add("info-izq", "fuera");
        infoIzquierda.appendChild(document.createElement("span"));

        let spanTooltip = document.createElement("span");
        spanTooltip.classList.add("tooltiptext_derecha");
        spanTooltip.textContent = `Memoria disponible ${tam}MB`;

        let pestañaDerecha = document.createElement("div");
        pestañaDerecha.setAttribute("data-size",tam+"MB");
        pestañaDerecha.classList.add("pestana-derecha");


        particionCreada.appendChild(infoIzquierda);
        particionCreada.appendChild(spanTooltip);
        particionCreada.appendChild(pestañaDerecha);
        contenedorParticiones.appendChild(particionCreada);
        eventosParticiones();
        cerrar("add-proceso", "particiones");

        reubicacion();
}





