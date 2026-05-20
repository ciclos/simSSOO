eventosProcesos();
eventosParticiones();


function eventosParticiones(){
    
    let particiones = document.querySelectorAll("#contenedor-memoria .particion");// selecionamos todas las cajas con la clase .particion
    // recoremos las cajas
    for(i=0; i < particiones.length;i++){
        // si alguna de estas activa el evento dragover quiere decir que estan arrastrando un elemento sobre "mi"
        particiones[i].addEventListener("dragover", 
            function (event) {
                event.preventDefault();// detenemos el evento
            });
            // con el evento drop manejamos la zona de caida del elemento arrastrable desde el contenedor original a la zona de caida
        particiones[i].addEventListener("drop",
            function(event) 
            {
                event.preventDefault();// detemos el evento
                // con event.dataTransfer.getData recuperamos el elemento arrastrado en formato "text"
                let proceso = document.getElementById(event.dataTransfer.getData("text"));
                // añadir proceso a particion si coge teniendo en cuenta su tamaño

                // calculamos el espacio restante en la particion de la memoria
                let tam=parseInt(getComputedStyle(this).height) - parseInt(getComputedStyle(proceso).height);
                if(tam<0 ){
                    // No hay espacio avisamos al usuario
                    document.querySelector("#tamano").classList.add("alerta-animacion");
                }else{
                    // si ya hay un proceso en la particion 
                    if(this.querySelectorAll(".proceso").length===1){
                        document.querySelector("#ocupado").classList.add("alerta-animacion");
                    }else{
                        // si no hay ningun proceso la añadimos
                        this.appendChild(proceso);
                        proceso.setAttribute("onclick",mostrarReubicacion(this));
            
                        //calculamos el espacio restante disponible en la memoria y se lo asignamos al tooltip
                        this.querySelector(".tooltiptext_arriba").innerHTML="Memoria disponible: "+tam/50+" MB";

                    }
                } 
            });
    }

}

function eventosProcesos(){
    // selecionamos las cajas con las cajas con las clases proceso
    var proceso = document.querySelectorAll(".proceso");
    // recorremos las cajas
    for(i=0; i < proceso.length;i++){
        // preguntamos si alguno de ellos se a activado el dragstart
        proceso[i].addEventListener("dragstart",
            function (event){
                // si algun proceso activa el evento se asigna el elemento arrastrado y guardamos su id
                event.dataTransfer.setData("text", event.target.id);
            });
    }
}









