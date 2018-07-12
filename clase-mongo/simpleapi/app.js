const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes.js");
const mongoose = require("mongoose");

const app = express();

mongoose.connect('mongodb://localhost/registroPersonas');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

const server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});
