function multiplica(){
    let numero1= parseInt(document.getElementById ("num1").value)
    let numero2= parseInt(document.getElementById ("num2").value)
    let multiplicar =numero1 * numero2
    //mostrar el resultado
    document.getElementById("resultado").textContent="la multiplicacion es: " + multiplicar
    }