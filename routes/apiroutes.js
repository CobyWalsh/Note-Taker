const { json } = require('express');
const fs = require('fs');
const router = require('express').Router();
const store = require('../db/store');
const uuid = require('uuid');

// gets and reads the notes from the db and browser
router.get('/notes', (req, res) => {
    fs.readFile("db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        console.log(notes)
        res.json(notes);
    });
});

// posts the notes to the browser
router.post('/notes', (req, res) => {
    console.log('hitting /api/notes route');
    // destructure the note title and the note text from the body!
    const { title, text } = req.body;
    console.log('title and text is', title, text);
    fs.readFile("db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        console.log('data is ', data);
        const dataArray = JSON.parse(data)
        // otherwise if no error, add the title and text to the db.json file
        const noteToAdd = {
            title,
            text,
            //id: uuid()
        }
        // I will push my noteToAdd to the end of my data array; remember, the data is in the shape
        // of an array, so I can push notes to the end of it
        dataArray.push(noteToAdd);
        // now, rewrite the contents of the db.json file with the updated data array
        fs.writeFile('db/db.json', JSON.stringify(data), (err) =>
            err ? console.error(err) : console.log('Success!')
        )
        res.json('db.json file now looks like', data);
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