const { json } = require('express');
const fs = require('fs');
const router = require('express').Router();
const { v1: uuidv1 } = require('uuid');
const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../helpers/fsUtils');


// gets and reads the notes from the db and browser
router.get('/notes/:id', (req, res) => {
    const notesId = req.params.notes_id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((data) => data.notes_id === notesId);
            return result.length > 0
                ? res.json(result)
                : res.json('No tip with that ID');
        });
});


router.get('/notes', (req, res) => {
    console.log(req.body);
    console.log(__dirname)
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        console.log(data)
        res.json(JSON.parse(data));
        if (err) throw err;

    });
});

// DELETE Route for a specific tip
router.delete('/notes/:id', (req, res) => {
    const notesId = req.params.notes_id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            // Make a new array of all tips except the one with the ID provided in the URL
            const result = json.filter((data) => data.notes_id !== notesId);

            // Save that array to the filesystem
            writeToFile('./db/db.json', result);

            // Respond to the DELETE request
            res.json(`Item ${notesId} has been deleted 🗑️`);
        });
});


// posts the notes to the browser
router.post('/notes', (req, res) => {
    console.log('hitting /api/notes route');

    const newNote = req.body;

    // destructure the note title and the note text from the body!
    const { title, text } = req.body;
    console.log('title and text is', title, text);
    fs.readFile("./db/db.json", "utf8", (err, newNote) => {
        if (err) throw err;
        console.log('data is ', newNote);
        // const dataArray = JSON.parse(data)
        // otherwise if no error, add the title and text to the db.json file
        if (req.body) {
            const newNote = {
                title,
                text,
                id: uuidv1()
            };

            readAndAppend(newNote, './db/db.json');
            res.json(`Tip added successfully 🚀`);
        } else {
            res.error('Error in adding tip');
        }

    });
});
// imoports the module
module.exports = router;
