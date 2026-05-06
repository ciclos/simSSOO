
function siguiente(number){

    if(number==0){
        document.querySelector(".container-tour ").style.display="none";
        document.querySelector("#reubicacion").style.display="none";
    }else{
        if(number==3){
            document.querySelector("#procesos").style.display="block";
        }else{
            document.querySelector("#procesos").style.display="none";
        }

        if(number==6){
            document.querySelector("#particiones").style.display="block";
        }else{
            document.querySelector("#particiones").style.display="none";
        }

        if(number==7){
            document.querySelector("#reubicacion").style.display="block";
        }
        document.getElementById('instrucion-'+(number-1)).style.display="none";
        document.getElementById('instrucion-'+number).style.display="block";
    }

}