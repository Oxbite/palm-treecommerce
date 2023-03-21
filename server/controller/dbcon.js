const { default: mongoose } = require("mongoose");
require('dotenv').config();


exports.connect = async (req, res) => {
  await mongoose.connect(
    "mongodb+srv://bliss:2eRYfCRdRuVMXi7M@woodland.pfprl.mongodb.net/?retryWrites=true&w=majority"
  );
  return true;
};

// exports.connect = async (req, res) => {
//   await mongoose.connect(process.env.database);
//   console.log("hey");
//   return true;
// };
