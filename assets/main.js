let button = document.querySelector('#button')
let name = document.querySelector('#name')
let image = document.getElementById("img")
let gender = document.querySelector('#gender')
let type = document.getElementById("type")
let species = document.querySelector('#species')
let status = document.querySelector('#status')
let origin = document.querySelector('#origin')




function getInfo(){
    updateLoading()
    let randomNumber = Math.floor((Math.random() * 493) + 1)
    let apiUrl = 'https://rickandmortyapi.com/api/character/' + randomNumber

    axios.get(apiUrl).then(response => {
        updateInfo(response.data)
    }).catch(e => {
        updateInfoWithError()
    })
}

function updateInfo(data) {
    image.src = data.image;
    name.innerText= data.name
    species.innerText= `Species: ${data.species}`
    type.innerText= `Type: ${type.species}`
    gender.innerText= `Gender: ${data.gender}`
    status.innerText= `Status: ${data.status}`
    origin.innerText= `Origin: ${data.origin.name}`
    button.innerText=`Find Someone`
}

function updateInfoWithError(data) {
    image.src = ``;
    name.innerText= `Oh No! This Person Doesnt Exist!`
    species.innerText= ``
    type.innerText= ``
    gender.innerText= ``
    status.innerText= ``
    origin.innerText= ``
    button.innerHTML=`Find Someone`
}

function updateLoading(data) {
    image.src = ``;
    name.innerText= ``
    species.innerText= ``
    type.innerText= ``
    gender.innerText= ``
    status.innerText= ``
    origin.innerText= ``
    button.innerHTML=`<i class="fas fa-spinner fa-pulse"></i>`
}

button.addEventListener('click', getInfo)