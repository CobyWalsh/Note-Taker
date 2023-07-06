const { json } = require('express');
const fs = require('fs');
const router = require('express').Router();
const uuid = require('uuid');
const {
    readFromFile,
    readAndAppend,
    writeToFile,
  } = require('../helpers/fsUtils');
  

// gets and reads the notes from the db and browser
router.get('/notes_id', (req, res) => {
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
  

// router.get('/notes', (req, res) => {
//     fs.readFile("db/db.json", "utf8", (err, data) => {
//         if (err) throw err;
//         const notes = JSON.parse(data);
//         console.log(notes)
//         res.json(notes);
//     });
// });

// DELETE Route for a specific tip
// router.delete('/notes_id', (req, res) => {
//     const notesId = req.params.notes_id;
//     readFromFile('/db/db.json')
//       .then((data) => JSON.parse(data))
//       .then((json) => {
//         // Make a new array of all tips except the one with the ID provided in the URL
//         const result = json.filter((data) => data.notes_id !== notesId);
  
//         // Save that array to the filesystem
//         writeToFile('/db/db.json', result);
  
//         // Respond to the DELETE request
//         res.json(`Item ${notesId} has been deleted 🗑️`);
//       });
//   });
  

// posts the notes to the browser
router.post('/notes', (req, res) => {
    console.log('hitting /api/notes route');
    // destructure the note title and the note text from the body!
    const { title, text } = req.body;
    console.log('title and text is', title, text);
    fs.readFile("db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        console.log('data is ', data);
        // const dataArray = JSON.parse(data)
        // otherwise if no error, add the title and text to the db.json file
        if (req.body) {
        const noteToAdd = {
            title,
            text,
            //id: uuid()
        };

        readAndAppend(data, './db/db.json');
    res.json(`Tip added successfully 🚀`);
  } else {
    res.error('Error in adding tip');
  }

        // I will push my noteToAdd to the end of my data array; remember, the data is in the shape
        // of an array, so I can push notes to the end of it
        // dataArray.push(noteToAdd);
        // now, rewrite the contents of the db.json file with the updated data array
        
        // fs.writeFile('db/db.json', JSON.stringify(data), (err) =>
        //     err ? console.error(err) : console.log('Success!')
        // )
        // res.status(200).json(data);
    });
});

// works with the delete button in html to delete the note  from the browser
// router.delete('/notes', (req, res) => {
//     fs.readFile("db/db.json", "utf8", (err, data) => {
//         if (err) throw err;

//         var notes = JSON.filter(data);
//         console.log(notes)
//         res.json(notes);
//     });

// });

// imoports the module
module.exports = router;