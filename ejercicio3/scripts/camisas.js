function verificarcantidad (){
    let number = parseFloat(document.getElementById("number").value)
    let resulElement = document.getElementById("resultado")
    if(number>=5){
        resulElement.textContent= "compra con tarjeta de Credito"

    }
    else{
        resulElement.textContent= "la compra es en efectivo"
    }
}
