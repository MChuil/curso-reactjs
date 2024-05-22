/**
 *  Fetch API
 *      Crea llamadas HTTP (POST, GET, PUT, PATCH, DELETE)
 *      fetch(url, options)
 *          .then()
 *          .then()
 *          .then()
 *          .catch()
 * 
 *    
 */

const btnLoad = document.querySelector('#btnLoad')

document.addEventListener('DOMContentLoaded', ()=>{
    btnLoad.addEventListener('click', loadApi)
})


const loadApi = async ()=>{
    try {
        const response = await fetch('https://thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
        const data  = await response.json();
        console.log(data)
        const contenido = document.querySelector('.body')
        contenido.innerHTML = ''
        data.drinks.forEach(item => {
            contenido.innerHTML += `<li>${item.strDrink}<br><img src='${item.strDrinkThumb}'/></li>`
        });
    } catch (error) {
        console.log(error)        
    }


    // fetch('https://thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    //     .then(res => res.ok ? res.json() : [])
    //     .then(data => {
    //                 const contenido = document.querySelector('.body')
    //                 contenido.innerHTML = ''
    //                 data.drinks.forEach(item => {
    //                     contenido.innerHTML += `<li>${item.strDrink}<br>
    //                                             <img src='${item.strDrinkThumb}'/></li>`
    //                                         });
    //                 console.log(data)
    //     })

    // fetch('https://thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    //     .then( res => res.ok ? Promise.resolve(res) : Promise.reject(res) ) //verifica el resultado
    //     .then( res => res.json()) //da formato a mi data
    //     .then( data => {
    //         const contenido = document.querySelector('.body')
    //         contenido.innerHTML = ''
    //         data.drinks.forEach(item => {
    //             contenido.innerHTML += `<li>${item.strDrink}<br>
    //                                     <img src='${item.strDrinkThumb}'/></li>`
    //         });
    //         console.log(data)
    //     }) //obtenemos la data
    //     .catch( err=> console.log(err))
}


//consulta POST

// const data = new FormData()
// data.append('id', 1);
// data.append('name', 'Miguel')
// data.append('email', 'miguel gmail.com')

const data = {
    id: 1,
    name: 'Miguel',
    email: 'miguel@test.com'
}

fetch('https://thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-type': 'application/json'
    }
})