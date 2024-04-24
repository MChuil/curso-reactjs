// Funciones

// function saludo(nombre){
//     return `Hola, mi nombre es ${nombre}`
// }

const saludo = function(nombre){
    return `Hola, mi nombre es ${nombre}`
}

const saludo2 = (nombre) => {
    return `Hola, mi nombre es ${nombre}`
}

const saludo3 = (nombre) => `Hola, mi nombre es ${nombre}`

const despedida = () =>{
    return `Me despido desde, México...`
}

const despedida2 = () => `Me despido desde, México...`


console.log(saludo('Miguel'))
console.log(saludo2('Daniela'))
console.log(saludo2('Laura'))
console.log(despedida())
console.log(despedida2())


const perfil = () => ({
        name: 'Miguel Chuil',
        username : 'Mike',
        rol: 'Administrador'
    })


console.log(perfil())


// Convertir a funcion de flecha
// hacer el retorno implicito del objeto

// function registro(name, username, password, rol='Usuario'){
//     return {
//         nombre: name,
//         usuario: username,
//         clave: password,
//         tipo: rol
//     }
// }

const registro = (name, username, password, rol) => ({
	nombre: name,
	usuario: username,
	clave: password,
	tipo: rol
})

console.log(registro('geovani','georincon','asdfgh','admin'))
