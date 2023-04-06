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
const cart = require("../controller/cart");

// ********************************************** importing ************************************************

// route.get('/login' , dbcon.connect);

//login ko url bata data line aani db ma check garne fuck auth token bullshit
// route.get('/login/' ,  (req, res) =>{
//     //got id from url (params)
//     const e = req.query.id;
//     res.json({"id":e});
// });

const loginRequired = async (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    res.json({ status: "error", error: "login required" });
  }
};

const adminRequired = async (req, res, next) => {
  if (req.session.admin && req.session.admin == true) {
    next();
  } else {
    res.json({ status: "error", error: "access denied" });
  }
};

const loginFrowned = async (req, res, next) => {
  if (!req.session.userId) {
    next();
  } else {
    res.json({ status: "error", error: "a user is already logged in" });
  }
};

route.post("/login", loginFrowned, check.checkUser);
route.post("/register", loginFrowned, save.userSave);
route.post("/reset-password", loginFrowned, mail.reset_password);

route.post("/addProduct", adminRequired, save.productSave);
route.post("/addCategory", adminRequired, save.categorySave);
route.post("/addAdmin", adminRequired, save.userSave);
// route.post("/mailto", mail.sendMail);

route.get("/logout", loginRequired, check.logout);
route.get("/fetchUser", loginRequired, fetch.fetchUsers);
route.get("/me", fetch.fetchUsersName);
route.get("/delUser/", del.deleteUser);
route.get("/delCategory/", del.deleteCategory);
route.get("/delProducts/", del.deleteProducts);

route.get("/featured", product.featured);
route.get("/product", product.product);
route.get("/products", product.new);
route.get("/topProduct", product.topProducts);
route.get("/similarProduct/:categoryId", product.similarProducts);
route.get("/category", product.category);
route.get("/categories", fetch.fetchCategory);
route.get("/verification-email", loginRequired, mail.emailVerifySend);
route.get("/verify-email", loginRequired, mail.verifyEmail);
route.get("/forgot-password", loginFrowned, mail.forgot_password);
route.get("/check-token", loginFrowned, mail.forgot_password);

route.get("/cart", cart.items);
module.exports = route;
