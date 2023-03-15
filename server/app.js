// ********************************************** importing ************************************************

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const index = require('./routes/index'); 
var cors = require('cors')
const port = 4000;
// ********************************************** importing ************************************************

app.use(bodyParser.urlencoded({extended:false}));

app.use(cors())

// routing toindex page
app.use(index);

app.listen(port);
console.log('server live at: ' + port);