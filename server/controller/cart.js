/*
 * HOW SHOULD CART WORK????????????
 * CART WILL BE STORED IN DATABSAE FOR EACH USER, IF USER IS NOT FOUND CART IS STORED IN COOKIE
 */
const nodemailer = require("nodemailer");
const session = require("express-session");
require("dotenv").config();

const dbcon = require("../controller/dbcon");
const model = require("../model/dbModel");

exports.items = async (req, res) => {
  if (!(await dbcon.connect())) {
    throw "couldn't connect to mongodb";
  }
  if (!req.session.userId) {
    // res.json({ status: "error", error: "you are not logged in" });
    if (!req.cookies.cart) {
      res.cookie("cart", []);
      res.json({ cart: [] });
    }
    res.json({ cart: req.cookies.cart });
  } else {
    const products = await model.cart.findById(req.session.cart_id);
  }
};

exports.save = async (req, res) => {
  product;
};
