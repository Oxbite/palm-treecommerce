const nodemailer = require("nodemailer");
const session = require("express-session");
require("dotenv").config();

const dbcon = require("../controller/dbcon");
const model = require("../model/dbModel");

sendMail = (to, subject, message, cb) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yatrainfosys@gmail.com",
      pass: process.env.pass,
    },
  });

  const sub = subject;
  const text = message;
  console.log(sub + " " + text);
  let message = {
    from: "yatra.infosys@gmail.com",
    to: "yatrainfosys@gmail.com",
    subject: sub,
    text: text,
  };

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.error(err);
      cb.err();
    } else {
      cb.success();
    }
  });
};

const genToken = (req) => {
  const buffer = require("crypto").randomBytes(48);
  const token = buffer.toString("hex");

  return token;
};

exports.emailVerifySend = async (req, res) => {
  const user = req.session.userId;
  sendMail(
    req.session.email,
    "Your Email Verification link for Palm-treecommerce",
    "http:://localhost:4000/verifyEmail/" + user + "-" + genToken(req),
    {
      success: () => {
        req.session.token = token;
        res.json({ status: "success" });
      },
      err: () => {
        res.json({
          status: "error",
          error: "server error while sending email",
        });
      },
    }
  );
};

exports.verifyEmail = async (req, res) => {
  try {
    const token = req.query.token;
    if (req.session.userId + "-" + req.session.token === token) {
      if (!(await dbcon.connect())) {
        throw "err";
      }
      req.session.status = "verified";
      req.session.token = undefined;
      model.userModel.findByIdAndUpdate(req.session.userId, {
        status: "email verified on " + Date.now(),
      });
      res.send(
        "<h1>Your Email has been successfully verified! </h1> continue on http://localhost:3000/"
      );
    } else {
      res.json({ status: "error", error: "invalid token" });
    }
  } catch {
    req.json({ status: "error", error: "Server Error" });
  }
};

const storeToken = async (user, token, type) => {
  if (!dbcon.connect()) {
    throw "couldn't connect to database";
  }
  const stored = model.userTokens.findOne({ user, type });
  if (stored) {
    stored.token = token;
  } else {
    const newToken = new model.token({
      user,
      token,
      type,
    });
    await newToken.save();
  }
};

const checkTokenValidity = async (user, token, type) => {
  if (!dbcon.connect()) {
    throw "couldn't connect to database";
  }
  const stored = model.userTokens.findOne({ user, token, type });
  return stored;
};

exports.forgot_password = async (req, res) => {
  try {
    let email = req.query.email;
    if (!dbcon.connect()) {
      throw "couldn't connect to database";
    }
    const user = await model.userModel.findOne({ email });
    if (user) {
      const token = "http:://localhost:3000/forgot-password/" + genToken(req);
      storeToken(user._id, token, "forgot_password");
      sendMail(user.email, "Your Password reset link", token, {
        success: () => {
          res.json({ status: "success" });
        },
        err: () => {
          res.json({
            status: "error",
            error: "server error while sending email",
          });
        },
      });
    } else {
      res.json({
        status: "error",
        error: "user doesn't exist!",
      });
    }
  } catch {
    res.json({ status: "error", error: "server error" });
  }
};

exports.reset_password_link = (req, res) => {
  try {
    const token = req.query.token;
    const stored = checkTokenValidity(
      token.split("-")[0],
      token,
      "forgot_password"
    );
    if (stored) {
      res.json({ status: "success" });
    } else {
      res.json({ status: "error", error: "invalid token" });
    }
  } catch {
    req.json({ status: "error", error: "Server Error" });
  }
};

exports.reset_password = async (req, res) => {
  try {
    const token = req.query.token;
    const stored = checkTokenValidity(
      token.split("-")[0],
      token,
      "forgot_password"
    );
    if (stored) {
      if (!(await dbcon.connect())) {
        throw "database connection error";
      }
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(req.body.password, salt);
      await model.userModel.findByIdAndUpdate(stored.user._id, { password });
      await model.token.findByIdAndDelete(stored._id);
      res.json({ status: "success" });
    } else {
      res.json({ status: "error", error: "invalid token" });
    }
  } catch (err) {
    console.log(err);
    req.json({ status: "error", error: "Server Error" });
  }
};
