

// variable
let divStag = document.querySelector('#listStagiaires');
let stagList = document.querySelector('.listStag');
// input
let nomInp = document.querySelector('#inpNom');
let ageInp = document.querySelector('#inpAge');
let inpCoding = document.querySelector('#inpCoding')
// btn
let ajoutStage = document.querySelector('.ajouteStag');
let removeStag = document.querySelector('.removeStag');
let refreshStag = document.querySelector('.refreshStag');
// tout mes input
let mesInput = document.querySelectorAll('input');

console.log(mesInput);

// ajouter un stagiaire 

function add(a, b, c, key) {
    let mesStag = {
        nom: a,
        age: b,
        coding: c,
    }
    let myObj = JSON.stringify(mesStag);
    localStorage.setItem(key, myObj);
    let myObjend = JSON.parse(localStorage.getItem(key)) 

    console.log(myObjend);

    let myList = document.createElement('li');
    myList.innerText = nomInp.value;
    myList.classList.add('stagiaire');
    stagList.appendChild(myList);

    // bouton de check
    let checkBtn = document.createElement('input');
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    checkBtn.setAttribute('type', 'checkbox')
    checkBtn.classList.add('check-btn');
    myList.appendChild(checkBtn);

    // bouton de supprimer
    let removeBtn = document.createElement('button');
    removeBtn.innerHTML = '<i class="fas fa-trash"></i> remove';
    removeBtn.classList.add('remove-btn');
    myList.appendChild(removeBtn);

    nomInp.value = '';
    ageInp.value = '';
    inpCoding.value = '';

    removeBtn.addEventListener('click', (e) => {
        for (let i = 0; i< localStorage.length; i++) {
            let key = localStorage.key(i);
            localStorage.removeItem(key);
            let parentListe = e.target.parentElement;
            parentListe.remove()
        }
    })
}

let compteur = 0;
ajoutStage.addEventListener('click', (e) => {
    e.preventDefault();
    let nom = mesInput[0].value
    let age = mesInput[1].value
    let coding = mesInput[2].value
    compteur++
    add(nom, age, coding, compteur)
});

ajoutStage.addEventListener('keypress', (e) => {
    if(e.keyCode == 13) {
        let nom = mesInput[0].value
        let age = mesInput[1].value
        let coding = mesInput[2].value
        compteur++
        add(nom, age, coding, compteur)
    }
});

// clear storage/refresh
removeStag.addEventListener('click', () => {
    localStorage.clear();
});

refreshStag.addEventListener('click', () =>{
    window.location.reload()
})


/// modal input 

let modalBtn = document.querySelector('.modal-btn');
let modalBg = document.querySelector('.modal-bg');
let modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click',function(){
    modalBg.classList.add('bg-active');
});
modalClose.addEventListener('click',function(){
    modalBg.classList.remove('bg-active');
});



// MODAL ADRESS IP

let modalBtn1 = document.querySelector('.modal-btn1');
let modalBg1 = document.querySelector('.modal-bg1');
let modalClose1 = document.querySelector('.modal-close1');

modalBtn1.addEventListener('click',function(){
    modalBg1.classList.add('bg-active');
});
modalClose1.addEventListener('click',function(){
    modalBg1.classList.remove('bg-active');
});

let ip = document.querySelector('#ip')
let city = document.querySelector('#city')
let region = document.querySelector('#region')
console.log(region);

const getApi = async () => {
    let data = await fetch('http://ip-api.com/json/')
    let res = await data.json()
    region.innerHTML = res.country
    city.innerHTML = res.city
    ip.innerHTML = res.query + " - " + res.isp
}

getApi();

// DATE 

let today = new Date();

function date() {

    let year = today.getFullYear()
    let month = today.getMonth()+1
    let day = today.getDate()

    day < 10 ? day = `0${day}` : day
    month < 10 ? month = `0${month}` : month

    let dateT = document.querySelector('#date')
    dateT.innerHTML = `${day}/${month}/${year}`
}

date()

let heure = () => {
    let d = new Date()
    let heures = d.getHours()
    let minutes = d.getMinutes()
    let seconde = d.getSeconds()

    seconde < 10 ? seconde = `0${seconde}` : seconde
    minutes < 10 ? minutes = `0${minutes}` : minutes

    let heureT = document.querySelector('#heure')
    heureT.innerText = `${heures}:${minutes}:${seconde}`
}
heure()
setInterval(heure, 1000)







