const path = require('path');
const router = require('express').Router()

// sets the router handle to lesten for a GET request to the /notes endpoint and then sends it back to the user as a response
router.get('/notes', function(req,res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});
// listens for a GET request from any path or endpoint and sends the request to index.html
// router.get('*', function(req,res) {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// });

// imports the module
module.exports = router