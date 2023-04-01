// ********************************************** importing ************************************************

const express = require("express");
const route = express.Router();
const dbcon = require("../controller/dbcon");
const save = require("../controller/save");
const fetch = require("../controller/fetch");
const check = require("../controller/login");
const del = require("../controller/delete");
const mail = require("../controller/mail");
const product = require("../controller/product");

// ********************************************** importing ************************************************

// route.get('/login' , dbcon.connect);

//login ko url bata data line aani db ma check garne fuck auth token bullshit
// route.get('/login/' ,  (req, res) =>{
//     //got id from url (params)
//     const e = req.query.id;
//     res.json({"id":e});
// });

route.post("/login", check.checkUser);
route.post("/register", save.userSave);
route.post("/addProduct", save.productSave);
route.post("/addCategory", save.categorySave);
route.post("/mailto", mail.sendMail);
route.post("/reset-password", mail.reset_password);

route.get("/logout", check.logout);
route.get("/fetchUser", fetch.fetchUsers);
route.get("/me", fetch.fetchUsersName);
route.get("/delUser/", del.deleteUser);
route.get("/delCategory/", del.deleteCategory);
route.get("/delProducts/", del.deleteProducts);

route.get("/featured", product.featured);
route.get("/product", product.product);
route.get("/topProduct", product.topProducts);
route.get("/similarProduct/:categoryId", product.similarProducts);
route.get("/category", product.category);
route.get("/verification-email", mail.emailVerifySend);
route.get("/verify-email", mail.verifyEmail);
route.get("/forgot-password", mail.forgot_password);
route.get("/check-token", mail.forgot_password);

module.exports = route;
