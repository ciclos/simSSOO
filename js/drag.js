eventosProcesos();
eventosParticiones();
const letrasProcesos=["A","B","C","D","E","F"];
let countProcesos=0;

function eventosProcesos(){
    
    let particiones = document.querySelectorAll("#contenedor-memoria .particion");
    
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
                
                // con this apunto simepre a la particion
                
                
                
                let tam=parseInt(getComputedStyle(this).height) - parseInt(getComputedStyle(proceso).height);
                if(tam<0){
                    
                    document.querySelector(".alerta").classList.add("alerta-animacion");
                }else{
                    this.appendChild(proceso);
                    this.querySelector(".tooltiptext_derecha").innerHTML="Memoria disponible: "+tam/50+" MB";

                }
                
                
                
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

function addRowDatos(){

        let elementoTbody=document.querySelector("table.datos tbody");
        let elementoAlgo=document.querySelector("table.algoritmo tbody");
        let fila=document.createElement('tr');

        for (let index = 0; index < 3; index++) {
            fila.appendChild(document.createElement('td'));
         
        }
        
        elementoTbody.appendChild(fila);

        let tiempos=document.querySelectorAll("table.algoritmo tbody tr:first-child td").length;
        let filaTiempos=document.createElement('tr');
        countProcesos++;
        
        for (let index = 0; index < tiempos; index++) {
            filaTiempos.appendChild(document.createElement('td'));
            filaTiempos.cells[index].innerHTML="&nbsp;";

            filaTiempos.cells[index].addEventListener('click',()=>{
                filaTiempos.cells[index].innerText="E";
                
            });
            filaTiempos.cells[index].addEventListener('dblclick',()=>{
                filaTiempos.cells[index].innerText="-";
                
            });

        }
         filaTiempos.cells[0].innerHTML=letrasProcesos[countProcesos];
        elementoAlgo.appendChild(filaTiempos);

        
}

function addColumn(){

    let tiempos=document.querySelectorAll("table.algoritmo tbody tr");

    
    tiempos.forEach(fila=>{
        fila.appendChild(document.createElement('td'));
    })

    /* for (let index = 0; index < countProcesos; index++) {

        console.log(tiempos[index]);
        let fila=tiempos[index].children[countProcesos];// cojo los tr
        console.log("fila->"+fila);
        fila.appendChild(document.createElement('td'));
        fila.cells[countProcesos].innerHTML="&nbsp;";
        
    }  */

}




