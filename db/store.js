const util = require('util');
const fs = require('fs');

// This package will be used to generate our unique ids. https://www.npmjs.com/package/uuid
const uuidv1 = require('uuid/v1');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read() {
      return readFileAsync('db/db.json', 'utf8');
    }
  
    write(note) {
      return writeFileAsync('db/db.json', JSON.stringify(note));
    }
    // recieves the notes user writes
    getNotes(notes) {
      notes.then(
        readFile('db/db.json') => {
          console.log(notes);
        }
      )
      return this.read().then((notes) => {
        var notes = JSON.parse(notes);
        console.log(notes)
        res.json(notes);
      });
    }
    // adds note to browser
    addNote(notes) {
        const userNote = {};
        var notes = JSON.parse(data);
        console.log(notes)
        res.json(notes);
        notes.push(userNote);
    //then we redirect it to the root route
  res.redirect('/');
    }
  
    removeNote(id) {
      // Get all notes, remove the note with the given id, write the filtered notes
      var notes = JSON.filter(data);
      console.log(notes)
      res.json(notes);
      note = deleteNotes;
    return res.redirect('/');
    }
  }
  
  module.exports = new Store();