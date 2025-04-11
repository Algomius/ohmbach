/* Fonction qui génère la carte de tarif pour un appartement en fonction de son _id */

function genereCarteTarif(id, avecBoutonDetail) {
    let appart = appartements.find(t=>t._id === id);

    let conteneurTarifs = document.createElement("div");
    conteneurTarifs.classList.add("conteneur_tarifs");

    /* Gestion du type d'appartement */
    let appType = document.createElement("div");
    appType.classList.add("conteneur_tarifs_appart")

    let imgAppart = document.createElement("img");
    imgAppart.setAttribute("src",appart.photos[0].source);
    imgAppart.setAttribute("alt",appart.photos[0].alt);
    imgAppart.setAttribute("title",appart.photos[0].titre);
    appType.appendChild(imgAppart);

    let etage = document.createElement("div");
    etage.classList.add("conteneur_tarifs_appart_etage")
    etage.innerText = appart.description;
    appType.appendChild(etage);

    let surface = document.createElement("div");
    surface.classList.add("conteneur_tarifs_appart_surface")
    surface.innerText = appart.surface + " m²";
    appType.appendChild(surface);

    conteneurTarifs.appendChild(appType);

    /* Gestion des prix */

    let appPrix = document.createElement("div");
    appPrix.classList.add("panelPrix");

    let pxSemaine = document.createElement("p");
    pxSemaine.innerText = "La semaine : " + appart.prixSemaine + " €";
    appPrix.appendChild(pxSemaine);

    let px3Nuit = document.createElement("p");
    px3Nuit.innerText = "3 Nuits : " + appart.prix3Nuits + " €";
    appPrix.appendChild(px3Nuit);

    let px4PlusNuits = document.createElement("p");
    px4PlusNuits.innerText = "4 Nuits et + : " + appart.prix4PlusNuits + "€ /nuit";
    appPrix.appendChild(px4PlusNuits);

    if (avecBoutonDetail == true) {
        let lienDetail = document.createElement("a");
        lienDetail.setAttribute("href",  cheminRacine + "/detail.html?appart=" + appart._id);
        lienDetail.classList.add("bouton");
        lienDetail.textContent = "En savoir plus";

        appPrix.appendChild(lienDetail);
    }

    conteneurTarifs.appendChild(appPrix);

    return conteneurTarifs;
}

function genererLogo(cheminRacine) {
    let logo = document.createElement("img");
    logo.setAttribute("src", cheminRacine + "/images/0_logo/logo.png");
    logo.setAttribute("alt", "logo du site Ohmbach.fr");
    logo.setAttribute("title", "Logo Ohmbach.fr");
    logo.classList.add("logo");
    return logo;
}

function genererLienAccueil(cheminRacine) {
    let lienAccueil = document.createElement("a");
    lienAccueil.setAttribute("href", cheminRacine + "/index.html");
    lienAccueil.textContent = "Accueil";
    return lienAccueil; 
}

function genererLienContact(cheminRacine) {
    let lienContact = document.createElement("a");
    lienContact.setAttribute("href",  cheminRacine + "/contact.html");
    lienContact.textContent = "Contact";
    return lienContact;
}

function genererLienLivreDor(cheminRacine) {
    let lienLivre = document.createElement("a");
    lienLivre.setAttribute("href",  cheminRacine + "/livredor/index.html");
    lienLivre.textContent = "Livre d'or";
    return lienLivre;
}

function genererLienLegal(cheminRacine) {
    let lienLegal = document.createElement("a");
    lienLegal.setAttribute("href",  cheminRacine + "/mentionsLegales.html");
    lienLegal.textContent = "Mentions légales";
    return lienLegal;
}

function genererLienMail() {
    let lienMail = document.createElement("a");
    lienMail.setAttribute("href", "mailto:ohmbach@sfr.fr");
    lienMail.textContent = "Contacts";
    return lienMail;
}


function genererEntete(cheminRacine) {
    /* Vider le contenu de l'entête */
    let entete = document.getElementById("entete");
    while (entete.firstChild) {
        entete.removeChild(entete.firstChild);
    }

    /* Logo */
    entete.appendChild(genererLogo(cheminRacine));

    /* Navigation */
    let navigation = document.createElement("nav");
    navigation.setAttribute("id", "menu")

    /* Bouton Accueil */
    lienAccueil = genererLienAccueil(cheminRacine);
    lienAccueil.classList.add("bouton");
    navigation.appendChild(lienAccueil);

    /* Bouton livre d'or*/
    let lienLivre = genererLienLivreDor(cheminRacine);
    lienLivre.classList.add("bouton");
    navigation.appendChild(lienLivre);

    /* Bouton Contact */
    let lienContact = genererLienContact(cheminRacine);
    lienContact.classList.add("bouton");
    navigation.appendChild(lienContact);

    entete.appendChild(navigation);
}

function genererPied(cheminRacine) {
    /* Vider le contenu du pied */
    let pied = document.getElementById("pied");
    while (pied.firstChild) {
        pied.removeChild(pied.firstChild);
    }  
    /* Contact */

    let contact = document.createElement("div");
    contact.classList.add("footer-element");

    contact.appendChild(genererLogo(cheminRacine));

    let contactListe = document.createElement("div");
    contactListe.classList.add("footer-element-list");

    /* Bouton Mention légal */
    let lienMentions = genererLienLegal(cheminRacine);
    lienMentions.classList.add("bouton");
    contactListe.appendChild(lienMentions);


    /* Bouton Contact */
    let lienContact = genererLienContact(cheminRacine);
    lienContact.classList.add("bouton");
    contactListe.appendChild(lienContact);

    contact.appendChild(contactListe);

    pied.appendChild(contact);
}

if (typeof cheminRacine != "undefined" )
{
    genererEntete(cheminRacine);
    genererPied(cheminRacine);
}