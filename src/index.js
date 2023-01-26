import validator from './validator.js';

const btn = document.getElementById('paybtn');
btn.addEventListener("click",function(){
  const numeroTarjeta = document.getElementById("cardnumber").value;
  const resultado=validator.isValid(numeroTarjeta);
  if (resultado===true) {
    const hola=validator.maskify(numeroTarjeta)
    document.getElementById("result").innerHTML = (resultado);
    document.getElementById("hiddenNumber").innerHTML = (hola);
  } else {
    document.getElementById("result").innerHTML = (resultado);
  }
});
// const hide = document.getElementById('cardnumber').value;
// addEventListener('keyup', (function() {
// const numOculto=validator.Maskify(numeroTarjeta);
// numOcultofinal= numOculto.toString();










        
    
    


console.log(validator)
