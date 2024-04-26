// Fetch API
/**
 *  sintaxys:
 * 
 *      fetch(url, opciones)
 *          .then()
 *          .theh()
 *          .catch()
 * 
 */

const url = 'https://jsonplaceholder.typicode.com';
// fetch(`${url}/users`)
//     .then(response => response.json())
//     .then(data =>{
//         console.log(data)
//     })
//     .catch(err => console.log(err))


// fetch(`${url}/users`)
//     .then(response => response.ok ? response.json() : Promise.reject(response))
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


const result = fetch(`${url}/users`);

// result.then( resp => {
//     resp.json().then(data =>{
//         console.log(data)
//     })
// }).catch(err => console.warn(err));

result.then( resp => resp.json())
    .then(data => {
        // console.log(data);
        let html = '';
        data.forEach( item => {
            html += `<li>${item.name}</li>`
        });
        document.body.innerHTML= html
    })
    .catch(err => console.warn(err));

const data ={
    nombre: 'Miguel',
    pais: 'Mexico'
}


// fetch('url', {
//     method:'post',
//     headers:{
//         'Content-Type': 'application/json'
//     },
//     body: data
// })