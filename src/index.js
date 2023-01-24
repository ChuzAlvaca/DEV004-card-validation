import validator from './validator.js';
const btn = document.getElementById('paybtn');

btn.addEventListener("click",function(){
  const numeroTarjeta = document.getElementById("cardnumber").value;
  const resultado=validator.isValid(numeroTarjeta);
  if (resultado===true) {
    document.getElementById("result").innerHTML = resultado;
  } else {
    document.getElementById("result").innerHTML = resultado;
  }
  
});
console.log(validator);