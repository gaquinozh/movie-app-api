// BASE SETUP
// =============================================================================

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movies');

// REGISTER ROUTES -------------------------------
// all of the routes will be prefixed with /api
// =============================================================================
app.use('/api', require('./app/routes/router'));

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('API Running on port ' + port);

