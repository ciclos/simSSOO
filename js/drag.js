eventosProcesos();
eventosParticiones();
function eventosProcesos(){
    let particiones = document.querySelectorAll("#contenedor-memoria .particion");
    console.log(particiones.length);
    for(i=0; i < particiones.length;i++){

        particiones[i].addEventListener("dragover", 
            function (event) {
                event.preventDefault();
            });

        particiones[i].addEventListener("drop",
            function(event) 
            {
                event.preventDefault();
                
                let proceso = document.getElementById(
                    event.dataTransfer.getData("text")
                    );
                console.log(proceso)
                // con this apunto simepre a la particion
                this.appendChild(proceso);
                
            });
    }

}

function eventosParticiones(){

    var proceso = document.querySelectorAll(".proceso");
    
    for(i=0; i < proceso.length;i++){
        proceso[i].addEventListener("dragstart",
            function (event){
                event.dataTransfer.setData("text", event.target.id);
            });
    }
}
