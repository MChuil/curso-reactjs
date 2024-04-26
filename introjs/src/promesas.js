import { buscarHeroe, buscarHeroe2} from './importar'

// Promesas
/**
 *  Sintaxis:
 *  const promesa = new Promise();
 *      resolve = exito
 *      reject = falló
 */

const getHeroeAsync = ( id ) => {
    return new Promise( (resolve, reject) =>{
        setTimeout(()=>{
            const heroe = buscarHeroe2(id);
            // resolve(heroe);
            if(heroe){
                resolve(heroe)
            }else{
                reject('No encontrado...')
            }
        }, 2000)
    });
}

getHeroeAsync(80)
    .then( heroe => console.log(heroe))
    .catch( error => console.warn(error))


// promesa.then((heroe)=>{
//     console.log(`Encontrado`, heroe);
// }).catch((err)=>{
//     console.log(err)
// })