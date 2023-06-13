function divide() {
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    
    
    // Mostrar el resultado
    if (numero2 === 0) {
      document.getElementById("resultado").textContent = "No se puede realizar la operación";
    } else {
        let division = numero1 / numero2;
      document.getElementById("resultado").textContent = "La división es: " + division;
    }
  }

  
  
  
  