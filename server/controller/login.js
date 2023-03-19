//  ************************************ importing ************************************
const express = require("express");
const { Schema, startSession } = require("mongoose");
const router = express.Router();
const dbcon = require("../controller/dbcon");
const model = require("../model/dbModel");
const { use } = require("../routes");
const fetchh = require("./fetch");
const bcrypt = require("bcrypt");
const session = require("express-session");
startSession();

//  ************************************ importing ************************************

exports.checkUser = async (req, res) => {
  var session;
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;

  try {
    if (!(await dbcon.connect())) {
      console.log("terobau");
      throw "err";
    }
    const user = await model.userModel.find({ email }).exec();
    console.log(user);
    if (!user[0]) {
      return res.json({ error: "Email is invalid" });
    } else if (await bcrypt.compare(password, user[0].password)) {
      return res.json({ error: "Password is invalid" });
    }
    session = req.session;
    session.userName = username;
    session._id = user[0]._id;

    res.json({
      status: "Success logging in",
      username: session.userName,
      id: session.id,
    });
    // console.log(session.userName);
  } catch (error) {
    console.log(error);
    res.json({ error: "Server error, try again" });
  }
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.json({ success: false });
    } else {
      res.json({ success: true });
    }
  });
  res.clearCookie("token");
};
