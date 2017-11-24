'use strict';

const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

const dbfile = 'hp.db';
const db = new sqlite3.Database(dbfile);

// students
//
// primaryStudentID  name        houseid
//
// 1                 harry         1
//
// 2                 hermionne     2
//
//
// houses
//
// primaryhouseId  name
//
// 1                Griffondor
//
// 2                Serpentard


  // db.run ('CREATE TABLE students (primaryStudentId INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, houseId INTEGER, FOREIGN KEY (houseId) REFERENCES houses(primaryHouseId))');
    // db.run ('CREATE TABLE teachers (primaryTeachersId INTEGER AUTOINCREMENT PRIMARY KEY, name TEXT');
      // db.run ('CREATE TABLE houses (primaryHouseId INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT) ');

// db.run('INSERT into students values ("1", "harry", "1")');
// db.run('INSERT into students values ("2", "hermione", "2")');
// db.run('INSERT into houses values ("2", "Serpentard")');
// db.run('INSERT into teachers values ("1", "Dumbledor")');

// db.run('INSERT into houses (name) VALUES ("Serdaigle")');
 // db.run('INSERT into students (name, houseId) VALUES ("Walid", 2)');

// db.run('DELETE from students where primaryStudentID=3')

db.all ('SELECT students.name AS sName, houses.name AS hName FROM students INNER JOIN houses WHERE houses.primaryHouseId=students.houseId', (e,d) => {
  console.log(d);
});

// db.all('SELECT * from students', (e,d) => {
//   console.log(d);
// });
// db.all('SELECT * from houses', (e,d) => {
//   console.log(d);
// });
