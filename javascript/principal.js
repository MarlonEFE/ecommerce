let menu=document.getElementById('menu');
let ul=document.getElementById('ul');
menu.addEventListener('click',function(){
  ul.classList.toggle('abrirMenu');
});


var c=1;
 var imgc=document.getElementById('imgc');
function carrusel(){
    imgc.style.opacity="0";
    imgc.style.transition="all 1s";
    setTimeout("cambio()",1000);
}
function cambio(){
    c++;
    if(c>3){
        c=1;
    }
    imgc.setAttribute("src","../imagenes/EstacionGamer/bann"+c+".png");
    imgc.style.opacity="1";
    imgc.style.transition="all 1s";
    setTimeout("carrusel()",2000);
}

document.body.setAttribute("onload","carrusel()");