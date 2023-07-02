const { json } = require('express');
const fs = require('fs');
const path = require('path');
const router = require('express').Router()

router.get('/', (req, res) => {

    fs.readFile("db/db.json", "utf8", (err, data) => {

        if (err) throw err;

        var notes = JSON.parse(data);
        console.log(notes)
        res.json(notes);
    });
});

router.post('/notes', (req, res) => {
    fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;

    var notes = JSON.parse(data);
    console.log(notes)
    res.json(notes);
    });
});

router.delete('/notes', (req, res) => {
    fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;

    var notes = JSON.filter(data);
    console.log(notes)
    res.json(notes);
    });
});

        router.get('/notes', function(req,res) {
            res.sendFile(path.join(__dirname, "../public/notes.html"));
        });
      
        router.get('*', function(req,res) {
            res.sendFile(path.join(__dirname, "../public/index.html"));
        });

        // function updateDb() {
        //     fs.writeFile("db/db.json",JSON.stringify(data,'\t'),err => {
        //         if (err) throw err;
        //         return true;
        //     });
        // }
        module.exports = router