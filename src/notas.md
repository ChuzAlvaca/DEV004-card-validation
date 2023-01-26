
4556364607935616
preguntas
ESTOY ATORADA EN NO SABER UNA VEZ MAS COMO INTERACTUAR ENTRE LOS INDEX Y EL VALIDATOR

COMO LLAMAR A LA FUNCION DESDE UN EVENT EN EL IMPUT, 
*PUEDE SER EVENT "INPUT" "KEYUP" O ESTO NO ES NECESARIO PARA CONECTAR EL MASKIFY?

*DONDE PROBAMOS PEDACITOS DE CODIGO ONLINE?


preguntas:
Que significa exactamente que el codigo no esta pasando las pruebas en terminos practicos:
que tengo que repetirlo? 
No, se arregló. el test es simplemente si pasa o no ciertas condicionales para saber que funciona sin tener que probarlo en el explorador. 

VALIDATOR ES UN OBJETO que contiene a las funciones isValid y Maskify. 

index.js es el que interactua con el DOM 
validator.js no interactua con el DOM, los resultados hay que llevarlos a index.js para que puedan interactuar con el DOM. 

TO DO validator.maskify:
conectar la funcion con el DOM mediante index.js para poder probarla en el navegador
addEventlister
empezar a slice el string
ocultar x slice del string.

validator.maskify(creditCardNumber)`: `creditCardNumber` es un `string` con
    el número de tarjeta y esta función debe retornar un `string` donde todos menos
    los últimos cuatro caracteres sean reemplazados por un numeral (`#`) o 🐱.
    Esta función deberá siempre mantener los últimos cuatro caracteres
    intactos, aún cuando el `string` sea de menor longitud.

    Ejemplo de uso

    ```js
    maskify('4556364607935616') === '############5616'
    maskify(     '64607935616') ===      '#######5616'
    maskify(               '1') ===                '1'
    maskify(               '')  ===                ''


