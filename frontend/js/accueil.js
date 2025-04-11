/* Fonction qui génère le panel tarifs avec toutes les informations concernant les appartements */
function genererTarifs() {
    /* Vider le contenu du panel appartement */

    let appartTarifs = document.getElementById("tarifs_detail");
    while (appartTarifs.firstChild) {
        appartTarifs.removeChild(appartTarifs.firstChild);
    }

    /* Parcourir les données des appartements */
    for (let appart of appartements) {
        /* Ajouter un titre pour chaque appartement */
        let appartTitre = document.createElement("h3");
        
        appartTitre.innerText = appart.nom + " : " + appart.personnes + " personnes";
        appartTarifs.appendChild(appartTitre);
        appartTarifs.appendChild(genereCarteTarif(appart._id, true));
    }
}

genererTarifs();