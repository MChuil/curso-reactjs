// Operador condicional ternario

const edad = 18;
let mensaje = ''
if(edad>17){
    mensaje = 'Mayor de edad';
}else{
    mensaje = 'Menor de edad';
}

const message = (edad<18) ? 'Mayor de edad' : 'Menor de edad';

console.log(mensaje)

console.log(message)

const login = false;

// const msj = (login) ? 'Autorizado' : null;
const msj = (login) && 'Autorizado';
console.log(msj);