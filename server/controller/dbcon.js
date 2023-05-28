const { default: mongoose } = require("mongoose");
require('dotenv').config();


exports.connect = async (req, res) => {
  await mongoose.connect(
    //CHANGE THIS!!!
    "localhost:2740"
  );
  return true;
};

// exports.connect = async (req, res) => {
//   await mongoose.connect(process.env.database);
//   console.log("hey");
//   return true;
// };
