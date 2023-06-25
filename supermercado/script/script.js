function pruductosDescuento (){
    let cantidad = parseInt(document.getElementById("cantidadInput").value)
    let precio = parseInt  (document.getElementById("precioInput").value)
    let compra = cantidad*precio
    let obsequio = document.getElementById("more")
    let comprai

    if (cantidad >=3){
        comprai=compra*0.85
        obsequio.textContent= "tienes un obsequio de de 1 docena en total llevarias la cantidad de " + (cantidad+1)
    }
    else{
        comprai=compra*0.90
    }

    let finCompra = document.getElementById("resultadoTotal")
    let finDescuento = document.getElementById("resultadoConDescuento")
    
    finCompra.textContent = " el  valor por las " + cantidad + " docenas es " + compra
    finDescuento.textContent = "el valor con el descuento es " + comprai
}   
//limpiar
let cantidadInput = document.getElementById("cantidadInput");

cantidadInput.addEventListener('input', limpiarResultados);

function limpiarResultados() {
    document.getElementById("resultadoTotal").textContent = "";
    document.getElementById("resultadoConDescuento").textContent = "";
    document.getElementById("more").textContent = "";
}