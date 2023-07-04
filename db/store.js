const util = require('util');
const fs = require('fs');

// This package will be used to generate our unique ids. https://www.npmjs.com/package/uuid
// const uuidv1 = require('uuid/v1');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read() {
      return readFileAsync('db/db.json', 'utf8');
    }
  
    write(note) {
      return writeFileAsync('db/db.json', JSON.stringify(note));
    }
  
    getNotes() {
      return this.read().then((notes) => {
        var notes = JSON.parse(notes);
        console.log(notes)
        res.json(uuidv1,"");
      });
    }
  
    addNote(note) {
        var notes = JSON.parse(data);
        console.log(notes)
        res.json(uuidv1, "");
    }
  
    removeNote(id) {
      // Get all notes, remove the note with the given id, write the filtered notes
      var notes = JSON.filter(data);
      console.log(notes)
      res.json(uuidv1);
    }
  }
  
  module.exports = new Store();