// Async ... Await

// const getApi = ()=> new Promise((resolve)=> resolve('https://jsonplaceholder.typicode.com'))

// getApi().then(resp => console.log(resp))

const url = 'https://jsonplaceholder.typicode.com';

const getApi = async () => {
    try {
        const resp = await fetch(`${url}/users`);
        // resp.json().then(data => console.log(data))
        const data = await resp.json()
        let html = '';
        data.forEach( item => {
            html += `<li>${item.name}</li>`
        });
        document.body.innerHTML= html
    } catch (error) {
        console.log(error)
    }


}

getApi()
