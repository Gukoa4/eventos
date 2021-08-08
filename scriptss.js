const buton = document.querySelector (".buton");
const dblbuton = document.querySelector (".dblbuton");
const mouseover = document.querySelector (".mouseover");
const mouseout = document.querySelector (".mouseout");
const contextmenu = document.querySelector (".contextmenu");
const mouseenter = document.querySelector (".mouseenter");
const mouseleave = document.querySelector (".mouseleave");
const mouseup = document.querySelector (".mouseup");
const mousedown = document.querySelector (".mousedown");
const mousemove = document.querySelector (".mousemove");
console.log(buton);

buton.addEventListener("click",(evt)=> {
    alert ("diste un click")
});
dblbuton.addEventListener("dblclick",(evt)=> {
    alert ("diste un doble click")
});
mouseover.addEventListener("mouseover",(evt)=> {
    alert ("pasaste")
});
mouseout.addEventListener("mouseout",(evt)=> {
    alert ("Saliste")
});
contextmenu.addEventListener("contextmenu",(evt)=> {
    alert ("Se abrio menu contextual")
});
mouseenter.addEventListener("mouseenter",(evt)=> {
    alert ("Entro con el mouse")
});
mouseleave.addEventListener("mouseleave",(evt)=> {
    alert ("Saliste")
});
mouseup.addEventListener("mouseup",(evt)=> {
    alert ("Suelto")
});
mousedown.addEventListener("mousedown",(evt)=> {
    alert ("Aprieto")
});
mousemove.addEventListener("mousemove",(evt)=> {
    alert ("Movimiento")
});

const teclaKeydown = document.querySelector (".input-keydown");
const teclaKeypress = document.querySelector (".input-keypress");
const teclaonkeyup = document.querySelector (".input-onkeyup");
const keycontenedor = document.querySelector (".keycontenedor")
teclaKeydown.addEventListener("keydown",(evt)=> {
    alert ("Una tecla fue presionada")
});
teclaKeypress.addEventListener("keypress",(evt)=> {
    alert ("Un usuario presiono una tecla")
});
teclaonkeyup.addEventListener("keyup",(evt)=> {
    let tecla = evt.key;
    nuevoContenido = `La última tecla presionado fue: <b>${tecla}</b>`;
    keycontenedor.innerHTML = nuevoContenido;
});
 /*eventos de la interfaz*/

const entrada = document.querySelector(".seleccion");
const contenedor = document.querySelector(".seleccionado");

entrada.addEventListener ("select", (evt)=>{
    let start = evt.target.selectionStart;
    let end = evt.target.selectionEnd;
    let textoCompleto = entrada.value;

    contenedor.innerHTML = textoCompleto.substring(start,end);

})