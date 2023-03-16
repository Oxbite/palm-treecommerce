// ********************************************** importing ************************************************

const express = require('express');
const route = express.Router();
const dbcon = require('../controller/dbcon');
const save = require('../controller/save');
const fetch = require('../controller/fetch');
const del = require('../controller/delete');
// ********************************************** importing ************************************************


// route.get('/login' , dbcon.connect);

dbcon.connect();
//login ko url bata data line aani db ma check garne fuck auth token bullshit 
route.get('/login/' ,  (req, res) =>{
    //got id from url (params)
    const e = req.query.id;
    res.json({"id":e});
});

route.post('/saveUser' , save.userSave);
route.post('/saveProduct' , save.productSave);
route.post('/saveShop' , save.shopSave);
route.post('/saveCategory' , save.categorySave);

route.get('/fetchUser' , fetch.fetchUsers );
route.get('/fetchUserName' , fetch.fetchUsersName );
route.get('/delUser/' ,  del.deleteUser);
route.get('/delShop/' ,  del.deleteShop);
route.get('/delCategory/' ,  del.deleteCategory);
route.get('/delProducts/' ,  del.deleteProducts);


module.exports = route;
