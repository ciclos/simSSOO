
function reubicacion() {
    let particiones = document.querySelectorAll(".particion");

    let inicio = 0;
    let fin=0;
    let instruciones_x_mega = 32768;

    let puntitos="\n...\n...\n...\n...\n...\n...\n...\n...\n...\n...\n...\n...\n...\n...\n...\n...\n...\n...\n...\n...\n...";
    particiones.forEach(particion => {

        // cogemos le valor de la pestaña derecha
        let valueAfter = getComputedStyle(particion.querySelector(".pestana-derecha"), "::after").getPropertyValue('content');
        let size=valueAfter.slice(1,2);
    
        particion.querySelector(".info-izq").setAttribute("data-size",inicio+puntitos);
        fin= (size*instruciones_x_mega)+inicio-1;
        particion.querySelector(".info-izq span").innerHTML=fin;
        
        console.log(document.querySelector(".proceso"));
        if(particion.querySelector(".proceso")){
            particion.querySelector(".proceso").addEventListener('click',function(){

                document.querySelector("#input-mv").value=inicio;
                document.querySelector("#nombre").innerHTML=document.querySelector(".proceso .nombre-proceso p").textContent;;
                
            });
        }

        inicio+=size*instruciones_x_mega;// actualizacion valores para la siguiente particion
    });

    
}

reubicacion();