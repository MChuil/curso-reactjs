// Desestructuración de arrays


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];


const [ , , , abril] = meses;


console.log(abril);


const retornaData = () =>{
    return ['Lunes', 3.1416, true]
}
const [dia, pi, booleano ] = retornaData()
console.log(dia, pi, booleano)


const use = (numero)=>{
    return [numero, ()=>console.log('Hola desde JS Moderno...')]
}

const [num, miFuncion] = use(3.1416);
console.log(num);
miFuncion();