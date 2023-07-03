const { json } = require('express');
const fs = require('fs');

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
