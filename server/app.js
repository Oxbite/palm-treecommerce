// ********************************************** importing ************************************************

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const index = require('./routes/index'); 
var cors = require('cors')
const port = 4000;
// ********************************************** importing ************************************************

app.use(express.json()); //this is the build in express body-parser 
app.use(                //this mean we don't need to use body-parser anymore
  express.urlencoded({
    extended: true,
  })
); 

// app.use(bodyParser.urlencoded({extended:false}));

app.use(cors())

// routing toindex page
app.use(index);

app.listen(port);
console.log('server live at: ' + port);