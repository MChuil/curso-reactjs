
const useState = ( value )=>{
    return [ value, ()=>{ console.log("Hola desde ReactJS")}]
}

const [ nombre, setNombre ] = useState('ReactJS');

console.log(nombre)
setNombre()