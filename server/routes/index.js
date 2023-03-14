// ********************************************** importing ************************************************

const express = require('express');
const route = express.Router();
const app = express;
const dbcon = require('../controller/dbcon');
const controller = require('../controller/index') 

// ********************************************** importing ************************************************

route.get('/' , controller.homePage);
route.get('l')