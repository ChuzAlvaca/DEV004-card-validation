

const validator = {
  isValid(numeroTarjeta) { 
    const arrOfDigits = Array.from(String(numeroTarjeta),Number);
    if (arrOfDigits.length === 1) {
      alert("escribe un número de tarjeta válido");
      return null;
    }
    if (arrOfDigits.length === 0) { 
      alert("escribe un número de tarjeta válido");
      return null;
    }
    arrOfDigits.reverse();
    arrOfDigits.forEach(function (numero, index) {
      //console.log(numero,index);
      if (index % 2 !== 0) {
        const j = numero * 2;
        //arrOfDigits[index] = j
        if (j >= 9) {
          const substring = j.toString().split("").map(Number);
          //console.log(substring);

          //variable de iniciacion, empieza en 0 y va a ir sumando los digitos del array
          //suma los elementos de un array
          let k = 0;
          substring.forEach(function (numero2) {
            k = k + numero2;
          });
          arrOfDigits[index] = k;
          
        } else {
          arrOfDigits[index] = j;
        }
      }
    });

    let numFinal = 0;
    arrOfDigits.forEach(function (numero,) {
      numFinal = numFinal + numero;
    });

    
    if (numFinal % 10 === 0) {
      return true
    } else {
      return false
    }
  }  
}

export default  validator;