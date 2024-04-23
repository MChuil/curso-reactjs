//Template String

const name = 'Miguel';
const lastname ='Chuil Martinez'

// const hi = 'Hola, ' + name + ' ' + lastname

//Backtick

function getHello(name, lastname){
    return `Hola, ${name} ${lastname}`
}

console.log(`Llamada a funcion: ${getHello(name, lastname)}`)
