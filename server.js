// creating variables and implamenting express,fs, and path. Setting the folders for the data to go into and opeining the port 3000
const express = require("express");
const fs = require("fs");
const path = require('path');
const apiRoutes = require("./routes/apiroutes");
const app = express();
const PORT = process.env.PORT || 3000;
const htmlRoutes = require('./routes/htmlRoutes');

// uses express to send data to specific file using the const used above
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
// makes sure the port is listening to our 3000 port
app.listen(PORT, function() {
    console.log("app listening on PORT: " + PORT);
});  
