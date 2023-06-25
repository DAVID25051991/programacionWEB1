function calcularCompra(){
    let cantidad = parseInt(document.getElementById("cantidadInput").value)
    let precio = parseInt(document.getElementById("valorInput").value)
    let total = cantidad * precio
    let totalCompra

    if(cantidad >=3){
        totalCompra=total*0.8
        //totalCompra.textContent="el Precio de las camisas tiene el 20% de descuento y es igual a " + totalCompra
    }
    else{
        totalCompra=total*0.9
        //totalCompra.textContent="el Precio de las camisas tiene el 20% de descuento y es igual a " + totalCompra
    }
    let totalResultadoElement = document.getElementById("totalResultado")
    totalResultadoElement.textContent="el total de la cantidad de las camisas es" + total

    let totalConDescuento=document.getElementById("totalCompraResultado")
    totalConDescuento.textContent = "el total con descuento es " + totalCompra
}