const { default: mongoose } = require("mongoose");

exports.connect = async (req, res) => {
  await mongoose.connect(
    "mongodb+srv://bliss:2eRYfCRdRuVMXi7M@woodland.pfprl.mongodb.net/?retryWrites=true&w=majority"
  );
  return true;
};
