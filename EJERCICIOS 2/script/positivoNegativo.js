function verificarNumero (){
    let number = parseFloat(document.getElementById("numerInput").value)
    let resulElement = document.getElementById("resultado")
    if(number>0){
        resulElement.textContent= "el numero es positivo"

    }
    else if(number < 0){
        resulElement.textContent = "el numero es negativo"
    }
    else{
        resulElement.textContent= "el numero es cero"
    }
}

