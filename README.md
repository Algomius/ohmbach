# ohmbach
Projet Ohmbach 2025


    1. Node.JS :

        Télécharger nodeJS : https://nodejs.org/en/
        Ceci installe également Node Packets Manager : npm
        Installer les dépendances : npm install
        Lancer le serveur pour tester en local : npm run start

    2. Initialiser le projet :

        npm init : Créer le fichier package.json qui va contenir la liste de tous les packages
        node server : lance le server
        npm install -g nodemon : nodemon permet de prendre en compte les modifications sans relancer le server
        nodemon server : lance le server en tenant compte des modifications

    3. Express :

        Express est un framework JS, il permet d'ajouter des fonctionalités de traitement des requêtes
        Installation : npm install express --save
        --save : permet de sauvegarder express dans package.json
        On peut alors créer un fichier qui va contenir notre application (app.js) et importer express : 
            const express = require("express");
            const app = express();
            module.exports = app;
        L'export permet d'accéder à l'application express dans les autres modules du projet