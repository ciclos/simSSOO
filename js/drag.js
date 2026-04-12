eventosProcesos();
eventosParticiones();
const letrasProcesos=["A","B","C","D","E","F"];
let countProcesos=1;

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
                
                
                let tam=parseInt(getComputedStyle(this).height) - parseInt(getComputedStyle(proceso).height);
                
                this.querySelector(".tooltiptext_derecha").innerHTML="Memoria disponible: "+tam/50+" MB";
                
                
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

    let tiempos=document.querySelectorAll("table.algoritmo tbody");
    

    for (let index = 0; index < countProcesos; index++) {

        console.log(tiempos[index]);
        let fila=tiempos[index].children[index];// cojo los tr
        console.log("fila->"+fila);
        fila.appendChild(document.createElement('td'));
        fila.cells[index].innerHTML="&nbsp;";
        
    }

}

/* const showButton = document.querySelector("#show-button");
showButton.addEventListener("click", function () {
  const alertDialog = document.querySelector("#alert-dialog");
  alertDialog.showModal();
}); */

function mostrarModal(id){
    document.querySelector('.contenedor-dialogo').style.display='block';
    document.querySelector('#'+id).style.display='block';
    document.body.style.overflow='hidden';
}

function cerrar(id){
    document.querySelector('.contenedor-dialogo').style.display='none';
    document.querySelector('#'+id).style.display='none';
    document.body.style.overflow='visible';
}

