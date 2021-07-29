var c=1;
 var j=document.getElementById('j');
function carrusel(){
    j.style.opacity="0";
    j.style.transition="all 1s";
    setTimeout("cambio()",1000);
}
function cambio(){
    c++;
    if(c>6){
        c=1;
    }
    j.setAttribute("src","../imagenes/EstacionGamer/j"+c+".jpg");
    j.style.opacity="1";
    j.style.transition="all 1s";
    setTimeout("carrusel()",2000);
}

document.body.setAttribute("onload","carrusel()");