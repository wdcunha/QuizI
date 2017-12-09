const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (request, response) => {
  response.redirect('./clucks');
});

const clucksRouter = require('./routes/clucks');
app.use('/clucks', clucksRouter);

var time = new Date();

const DOMAIN = 'localhost';
const PORT = '7000';
app.listen(PORT, DOMAIN, () => {
console.log(`Updated at: ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ---» Server 'Cluckrs System - Quiz 1' listenning on http://${DOMAIN}:${PORT}`);
});






// bump
