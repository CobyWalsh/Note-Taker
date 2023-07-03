const express = require("express");
const fs = require("fs");
const path = require('path');
const apiRoutes = require("./routes/routes")
const app = express();
const PORT = process.env.PORT || 3000;
const htmlRoutes = require('./routes/htmlRoutes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, function() {
    console.log("app listening on PORT: " + PORT);
});  