const nodemailer = require("nodemailer");
const session = require("express-session");
require("dotenv").config();

const dbcon = require("../controller/dbcon");
const model = require("../model/dbModel");

sendMail = (subject, message, cb) => {
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

exports.emailVerifySend = async (req, res) => {
  const buffer = require("crypto").randomBytes(48);
  const token = buffer.toString("hex");
  const user = req.session.userId;

  sendMail(
    "Your Email Verification link for Palm-treecommerce",
    "http:://localhost:4000/verifyEmail/" + user + "-" + token,
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
