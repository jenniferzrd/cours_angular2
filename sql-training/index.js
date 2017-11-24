'use strict';

// j'appelle mon traducteur de sqlite3 pour node

const sqlite3 = require('sqlite3').verbose();

// fs = filesystem

const fs = require('fs');

// Initialiser la connection
// SQLite est une base de données ultra light
// Toutes les données sont stockées sur un seul simple fichier
// On va donc d'abord require ce fichier et vérifier qu'il existe
//------------------------------------------------//

// ici c'est notre base de donnée en binaire

const dbfile = 'test.db';
const db = new sqlite3.Database(dbfile);
//------------------------------------------------//

// Construire les models
//------------------------------------------------//

// Si le fichier n'existe pas je vais le créer
if (!fs.existsSync(dbfile)) {

    // Et définir les models de chaque table
    // const users = require('./models/users');
    // db.run(users);

    // penser comme un excel
    // on a notre premiere cellule user avec dedans un name et mail
    // a chaque fois que je fais un nouveau user, il va donner un id (un rowNumber) à cet user
    db.run('CREATE TABLE users (name TEXT, mail TEXT)');
}

// LE INSERT AJOUTE UNE LIGNE

// 1) db.run('INSERT into users values ("george", "gg@gmail.com")');
// 2) db.run('INSERT into users values ("david", "dd@gmail.com")');
// 3)
db.run('INSERT into users values ("david", "ee@gmail.io")');
// e error, d pour data
// select name et mail "*" = all, c'est la colomne from la <table>
//1) db.all('SELECT * from users', (e,d) => {
//   console.log(d);
// });

// Ici je lui demande une fois george inséré, de m'afficher david, son mail, de la table user, seulement
//quand le nom vaut david
// 2 et 3) il m'affiche tous les david qu'il trouve dans notre table users
// SELECT colonne from table where colonne_value = value
db.all('SELECT mail from users WHERE name="david"', (e,d) => {
  console.log(d);
});
//------------------------------------------------//

// J'exporte ma base de données
module.exports = db;

// On ne peut pas faire d'array ou d'objet, on utilise les ID pour les linker entre eux
// avec primary key et foreign key (elle ne correspond pas à la table original mais à une externe)
