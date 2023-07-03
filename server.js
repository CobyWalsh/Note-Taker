const express = require("express");
const fs = require("fs");
const path = require('path');
const app = require("./routes/routes");
const apiRoutes = require("./routes/routes")
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))
app.use('/api', apiRoutes);
app.listen(PORT, function() {
    console.log("app listening on PORT: " + PORT);
});  