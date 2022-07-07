let listeAnimaux = null;
let chargerAnimaux = () => {
    fetch('serveur/donnees/animaux.json')
    .then(reponse => reponse.json())
    .then(listeJSON  => {
        listeAnimaux = listeJSON;
        remplirAnimauxDansSelect();
    });
}

let remplirAnimauxDansSelect = () => {
    let selAnimaux = document.getElementById('idanimaux');
    for(let animal of listeAnimaux){
        selAnimaux.options[selAnimaux.options.length] = new Option(animal.nom, animal.espece);
    }
}