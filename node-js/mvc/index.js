const express = require("express");
const path = require('path');
const routes = require('./controllers/router');
let app =express();

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));

app.use('/',routes)

app.listen(3000);
