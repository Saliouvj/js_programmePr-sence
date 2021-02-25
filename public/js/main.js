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