/*
function getUsersWithCallbacks(callback){
    fetch('https://randomuser.me/api/')
    .then(response => response.json())//traducir a JSON
    .then(data =>{
        const { results } = data;//guardar el dato en constante
        callback (null, results)
    })
    .catch(error => {
        callback(error,null)
    })
}

getUsersWithCallbacks((error,results)=> {
    if(error) console.error('Error al obtener datos', error)
    const name = document.getElementById('name');
    const surname = document.getElementById('surname');
    const phone = document.getElementById('phone');
    for(let user of results){  //for of
        name.innerText = user.name.first;
        surname.innerText = user.name.last;
        phone.innerText = user.phone;
    }
})
*/
//asincronia


//PROMESSAS
/*
const getUsersWithPromise = ()=>{
    return new Promise((resolve, reject)=> {
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const {results} = data;
            resolve(results)
        })
        .catch(error => reject(error))
    })
}

getUsersWithPromise()
    .then(results =>{
        const name = document.getElementById('name')
        const surname = document.getElementById('surname')
        const phone = document.getElementById('phone')
        for(const user of results){
            name.innerText = user.name.first
            surname.innerText = user.name.last
            phone.innerText = user.phone
        }
    })
    .catch(error => console.error(error))
*/

//ASYNC - AWAIT
const getUsersWithAsync = async ()=>{
    try{
        const response = await fetch('https://randomuser.me/api/?results=10')
        const { results } = await response.json()
        const users = document.getElementById('users')

        for(const user of results){
            users.innerHTML += `
                <tr id="${user.id.name}">
                    <td>${user.name.first}</td>
                    <td>${user.name.last}</td>
                    <td>${user.phone}</td>
                </tr>
            `
        }
        
    }catch(error){
        console.error(error)
    }
}

getUsersWithAsync()

