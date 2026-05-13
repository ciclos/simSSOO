eventosProcesos();
eventosParticiones();
const letrasProcesos=["A","B","C","D","E","F"];
let countProcesos=0;

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





/* 
    Buscamos el la tabla datos y añadimos una linea 
    Buscamos el la tabla ALGORITMOS y contamos cuantos td hay en una linea
    y añadimos una linea nueva con tantos td como hayamos contado

*/

function addRow(tablaId){
        
        let elementoAlgo=document.querySelector("table#"+tablaId+" tbody");
        

        let tiempos=document.querySelectorAll("table#"+tablaId+" tbody tr:first-child td").length;

        let filaTiempos=document.createElement('tr');
        
        
        for (let index = 0; index < tiempos; index++) {
            filaTiempos.appendChild(document.createElement('td'));
            filaTiempos.cells[index].innerHTML="&nbsp;";

            filaTiempos.cells[index].addEventListener('click',()=>{
                filaTiempos.cells[index].innerText="E";
                filaTiempos.cells[index].classList.remove("pop");
                void filaTiempos.cells[index].offsetWidth;
                filaTiempos.cells[index].classList.add("pop");

            });

            filaTiempos.cells[index].addEventListener('dblclick',()=>{
                filaTiempos.cells[index].innerText="X";
                filaTiempos.cells[index].classList.remove("pop");
                void filaTiempos.cells[index].offsetWidth;
                filaTiempos.cells[index].classList.add("pop");
                
            });

            filaTiempos.cells[index].addEventListener('contextmenu',()=>{
                filaTiempos.cells[index].innerText="";

                
            });

        }
        filaTiempos.cells[0].innerHTML=letrasProcesos[countProcesos];
        elementoAlgo.appendChild(filaTiempos);

        
}

function addRowDatos(){
    

     let elementoTbody=document.querySelector("table.datos tbody");
     let fila=document.createElement('tr');

        for (let index = 0; index < 3; index++) {
            fila.appendChild(document.createElement('td'));
        }
        fila.cells[0].innerHTML=letrasProcesos[countProcesos];

        elementoTbody.appendChild(fila);
    
    addRow("fcfs");
    addRow("sjf");
    addRow("srjn");
    addRow("rr");

    countProcesos++;
}




function addColumn(tablaId){

    let tiempos=document.querySelectorAll("table#"+tablaId+" tbody tr");

    
    tiempos.forEach(fila=>{
        fila.appendChild(document.createElement('td'));
    })
    let longitud=document.querySelector("table#"+tablaId+" tbody tr:first-child").cells.length-1;

    document.querySelector("table#"+tablaId+" tbody tr:first-child").cells[longitud].innerHTML=longitud;

}




