let listAnimaux = null;
let chargerAnimaux = () => {
    fetch('serveur/donnees/animaux.json')
    .then(reponse => reponse.json())
    .then(listJSON =>{
        listAnimaux = listJSON;
        injectAnimauxDansSelect();
    });
}
let injectAnimauxDansSelect = () =>{
    let selAnimal = document.getElementById('idanimaux');
    for(let unAnimal of listAnimaux){
        selAnimal.options[selAnimal.options.lenght] = new Option(unAnimal.nom  ,unAnimal.espece)
    }
}

