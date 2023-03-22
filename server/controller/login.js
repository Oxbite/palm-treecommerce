//  ************************************ importing ************************************
const { startSession } = require("mongoose");
const dbcon = require("../controller/dbcon");
const model = require("../model/dbModel");
const bcrypt = require("bcrypt");
startSession();

//  ************************************ importing ************************************

exports.checkUser = async (req, res) => {
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
    } else if (!(await bcrypt.compare(password, user[0].password))) {
      return res.json({ error: "Password is invalid" });
    } else {
      req.session.userName = user[0].Fname +" "+ user[0].Lname;
      req.session.userId = user[0]._id;

      return res.json({
        status: "Success logging in",
        username: req.session.userName,
        id: req.session.userId,
      });
    }
    // console.log(session.userName);
  } catch (error) {
    console.log(error);
    res.json({ error: "Server error, try again" });
  }
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      //good
      res.json({ success: false });
    } else {
      res.json({ success: true });
    }
  });
  res.clearCookie("token");
};
