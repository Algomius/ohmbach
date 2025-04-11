/* A activer lors de l'utilisation d'une API express *
getAllcomments = () => {
    return new Promise((resolve) => {
      let request = new XMLHttpRequest();
      request.onreadystatechange = function () {
        if (
          this.readyState == XMLHttpRequest.DONE &&
          this.status >= 200 &&
          this.status < 400
        ) {
          resolve(JSON.parse(this.responseText));
          console.log("Connected");
        } else {
        }
      };
      request.open("GET", "http://localhost:3001/api/comments/");
      request.send();
    });
  };

async function comments() {
    const com = await getAllcomments();  
    let livre = document.getElementById("livre");
    console.log("coucou");
    com.forEach((c) => {
      let desc = document.createElement("p");
      desc.textContent = c.texte;
      livre.appendChild(desc);

    });
};

comments();
*/

function genererNavigation(nav, page, cpt, msgParPage) {
  while (nav.firstChild) {
    nav.removeChild(nav.firstChild);
  }

  if (page == 1) {
    let boutInv = document.createElement("span");
    boutInv.classList.add("bouton");
    boutInv.classList.add("invisible");
    nav.appendChild(boutInv);
  }
  else 
  {
    let boutPred = document.createElement("a");
    boutPred.href="./index.html?page=" + (page-1);
    boutPred.classList.add("bouton");
    boutPred.innerText = "Page Précédente";
    nav.appendChild(boutPred);
  }

  let para = document.createElement("p");
  para.innerText = "Page " + page + " sur " + Math.ceil(cpt / msgParPage);
  nav.appendChild(para); 

  if (cpt >=  page * msgParPage) {
    let boutSucc = document.createElement("a");
    boutSucc.href="./index.html?page=" + (page+1);
    boutSucc.classList.add("bouton");
    boutSucc.innerText = "Page Suivante";
    nav.appendChild(boutSucc);
  }
  else
  {
    let boutInv = document.createElement("span");
    boutInv.classList.add("bouton");
    boutInv.classList.add("invisible");
    nav.appendChild(boutInv);
  }
}

function genererMessages(page) {

    const msgParPage = 30;
    /* Vider le contenu du panel livre */
    let livre = document.getElementById("livre");
    while (livre.firstChild) {
      livre.removeChild(livre.firstChild);
    }
    let cpt = 0;
    /* Parcourir les données des messages */
    for (let msg of messages.reverse()) {
        
        if ((page-1)*msgParPage <= cpt && cpt < page * msgParPage  ) {
            /* Ajouter un titre pour chaque message */
            let enteteMessage = document.createElement("h2");
            if (msg.nom) {
              enteteMessage.innerText = 'Message de ' + msg.nom;
            } else {
              enteteMessage.innerText = "Message d'un client anonyme";
            }
            if (msg.time) {
              let date = new Date(parseInt(msg.time) * 1000);
              enteteMessage.innerText += " le " + ("0" + (date.getDay() +1)).slice(-2) + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear();
            }

            livre.appendChild(enteteMessage);

            let contenuMessage = document.createElement("p");
            contenuMessage.innerText = msg.message;
            livre.appendChild(contenuMessage);
        }
        cpt++;
    }

    let navH = document.getElementById("navigationHaut");
    genererNavigation(navH, page, cpt, msgParPage)
    let navB = document.getElementById("navigationBas");
    genererNavigation(navB, page, cpt, msgParPage)
    
}

let page = 1;

const url = new URL(document.location);
const searchParams = url.searchParams;
if (searchParams.has('page')) {
  page = parseInt(searchParams.get('page'));
}


genererMessages(page);