import validator from './validator.js';

const btn = document.getElementById('paybtn');
btn.addEventListener("click",function(){
  const numeroTarjeta = document.getElementById("cardnumber").value;
  const resultado=validator.isValid(numeroTarjeta);
  if (resultado===true) {
    //limpia el input para dar la respuesta con mayor claridad. 
    document.getElementById("cardnumber").value = "";
    const numOculto=validator.maskify(numeroTarjeta)
    document.getElementById("result").innerHTML = (resultado);
    document.getElementById("hiddenNumber").innerHTML = (numOculto);
  } else {
    document.getElementById("result").innerHTML = (resultado);
  }
});











        
    
    


console.log(validator)
