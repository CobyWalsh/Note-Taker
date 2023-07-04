const { json } = require('express');
const fs = require('fs');
const router = require('express').Router();
const store = require('../db/store');

router.get('/notes', (req, res) => res.json(store));

// gets and reads the notes from the db and browser
router.get('/notes', (req, res) => {
    fs.readFile("db/db.json", "utf8", (err, data) => {
        if (err) throw err;

        var notes = JSON.parse(data);
        console.log(notes)
        res.json(notes);
    });
});
// posts the notes to the browser
router.post('/notes', (req, res) => {
    fs.readFile("db/db.json", "utf8", (err, data) => {
        if (err) throw err;

        var notes = JSON.parse(data);
        console.log(notes)
        res.json(notes);
    });
});
// works with the delete button in html to delete the note  from the browser
router.delete('/notes', (req, res) => {
    fs.readFile("db/db.json", "utf8", (err, data) => {
        if (err) throw err;

        var notes = JSON.filter(data);
        console.log(notes)
        res.json(notes);
    });

});

// imoports the module
module.exports = router;