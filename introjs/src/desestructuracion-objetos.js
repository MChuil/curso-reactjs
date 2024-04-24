// Desestructuración Objetos

const alumno = {
    nombre: 'Laura',
    edad: 35,
    dni: '125689790',
    correo: 'laugmail.com',
    pais: 'Colombia',
    ubicacion: {
        lat: 15.6699,
        lng: -12.6567
    }
}

// const nombre = alumno.nombre
// const edad = alumno.edad
// const dni = alumno.dni

const { dni, nombre, edad, ubicacion:{lat, lng}} = alumno;

console.log(nombre);
console.log(edad);
console.log(dni);
console.log(lat);
console.log(lng);


const dataAlumno = ({nombre, dni, pais = 'USA'}) =>{
    // const { dni, nombre, edad, correo } = alumno;
    console.log(nombre, dni, pais)
}

dataAlumno(alumno)