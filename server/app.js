// ********************************************** importing ************************************************

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();
const index = require("./routes/route");
var cors = require("cors");
const port = 4000;
const user = require("./model/dbModel").userModel;
const bcrypt = require("bcrypt");
const dbcon = require("./controller/dbcon");

// ********************************************** importing ************************************************

app.use(express.json()); //this is the build in express body-parser
app.use(
  //this mean we don't need to use body-parser anymore
  express.urlencoded({
    extended: true,
  })
);

// app.use(bodyParser.urlencoded({extended:false}));
const day = 1000 * 60 * 60 * 12; //12 hours

// app.use(cors());

app.use(
  session({
    name: "sessing",
    secret: "secret",
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: day, secure: false },
  })
);

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(cookieParser());
require("dotenv").config();
if (process.env.__PROD__ == 1) app.use("/test", require("./tests/testRoutes"));

// routing toindex page
app.use(index);

app.listen(port, async () => {
  if (!(await dbcon.connect())) {
    throw "error connecting to db";
  } else {
    var password = "";
    if ((await user.find({ admin: true })).length < 1) {
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash("adminpassword", salt);
      const users = new user({
        f_name: "admin",
        l_name: "test",
        email: "admintest@admin.com",
        password: password,
        admin: true,
      });
      try {
        const user = await users.save();
        console.log("user saving success!");
      } catch (err) {
        console.log("eror adding: " + err + " password: " + password);
      }
    }
  }
});
console.log("server live at: http://localhost:" + port);
