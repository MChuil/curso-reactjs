// importar, exportar
import  { heroes, villanos }  from './data/heroes';

// console.log(heroes)
// console.log(villanos)

const buscarHeroe = (id) =>{
    return heroes.find((heroe) => {
        if(heroe.id === id){
            return heroe;
        }
    })
}

const buscarHeroe2 = (id) => heroes.find((heroe) => heroe.id === id)

// console.log(buscarHeroe(5))
// console.log(buscarHeroe2(6))

export {
    buscarHeroe,
    buscarHeroe2
}



