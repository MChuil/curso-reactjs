/**
 * 
 *  Syntaxis :
 *      new Promise((resolve, reject)=>{
 *          if(true){
 *              resolve()
 *          }else{
 *              reject('No se pudo, por que?')
 *          }
 * 
 *          try{
 *              codigo...
 *              
 *              resolve()
 *          }catch(Throwexception th){
 *              reject(th)
 *          }
 *      })
 * 
 * 
 */
const movies = [
    {
        id: 1,
        title: 'El silencio de los inocentes',
        year: 1995
    },
    {
        id: 2,
        title: 'El ultimo de los Mohicanos',
        year: 1996
    },
    {
        id: 3,
        title: 'La mascara',
        year: 1997
    },
    {
        id: 4,
        title: 'El hombre de la mascara de hierro',
        year: 2000
    },
    {
        id: 5,
        title: 'Avatar',
        year: 2010
    },
    {
        id: 6,
        title: 'Titanic',
        year: 2001
    }
]

// const getMovies =()=>{
//     return movies;
// }

// console.log(getMovies());


const getMovies = ()=>{
    const num = 10;
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            if(num<10){
                resolve(movies);  //la promesa se realizo y le mando data
            }else{
                reject('Tenemos un error Huston....') //no se hizo
            }
        }, 2000)
    })
}

getMovies()
    .then( data => console.log(data))
    .catch( err => console.log(err))
