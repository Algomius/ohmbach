function genererDescriptif(id) {
    let infoAppart = appartements.find(t=>t._id === id);

    let descriptif = document.getElementById("descriptif");
    while (descriptif.firstChild) {
        descriptif.removeChild(descriptif.firstChild);
    }  

    let titreH1 = document.createElement("H1");
    titreH1.innerText = infoAppart.nom + " : " + infoAppart.personnes + " personnes";
    descriptif.appendChild(titreH1);

    let titreH2 = document.createElement("H2");
    titreH2.innerText = "Caractéristiques de l'appartement";
    descriptif.appendChild(titreH2);

    descriptif.appendChild(genereCarteTarif(infoAppart._id, false));
}

function genererObservations(id) {
    let infoAppart = appartements.find(t=>t._id === id);

    let observations = document.getElementById("observations");
    while (observations.firstChild) {
        observations.removeChild(observations.firstChild);
    }  

    let titreH2 = document.createElement("H2");
    titreH2.innerText = "Observations";
    observations.appendChild(titreH2);

    let appObs = document.createElement("div");

    if (infoAppart.hasOwnProperty("observations")) {

        for (let o of infoAppart.observations) {
            let obs = document.createElement("p");
            obs.innerText = o;
            appObs.appendChild(obs);
        }
    }


    observations.appendChild(appObs);
            
}

function genererPhotos(id) {
    let infoAppart = appartements.find(t=>t._id === id);

    let photos = document.getElementById("photos");
    while (photos.firstChild) {
        photos.removeChild(photos.firstChild);
    }  

    let titreH2 = document.createElement("H2");
    titreH2.innerText = "Quelques photos";
    photos.appendChild(titreH2);

    if (infoAppart.hasOwnProperty("photos")) {
        let divPhotos = document.createElement("div");
        divPhotos.classList.add("conteneur_photos");


        for (let p of infoAppart.photos) {
            let appartLien = document.createElement("a");
            appartLien.href = p.source;
            appartLien.classList.add("detail_lien");
            let appartImg = document.createElement("img");
            appartImg.classList.add("detail_photo");
            appartImg.setAttribute("src",p.source);
            appartImg.setAttribute("alt",p.alt);
            appartImg.setAttribute("title",p.titre);
            appartLien.appendChild(appartImg);
            divPhotos.appendChild(appartLien);
        }
        let photos = document.getElementById("photos");
        photos.appendChild(divPhotos);
    }

}

const url = new URL(document.location);
const searchParams = url.searchParams;

if (searchParams.has('appart')) {
    appart = searchParams.get('appart')
    genererDescriptif(appart);
    genererObservations(appart);
    genererPhotos(appart);

}