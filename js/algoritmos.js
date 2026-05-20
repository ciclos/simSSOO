/* 
    Buscamos el la tabla datos y añadimos una linea 
    Buscamos el la tabla ALGORITMOS y contamos cuantos td hay en una linea
    y añadimos una linea nueva con tantos td como hayamos contado

*/
const letrasProcesos=["A","B","C","D","E","F"];
let countProcesos=0;

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
