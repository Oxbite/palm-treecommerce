const { default: mongoose } = require("mongoose")

exports.connect = (req,res) => {
    const db = mongoose.connect("mongodb://127.0.0.1:27017/treeCommerce")
    .then(()=>
    console.log("Connected!"))
    .catch((err)=>
    console.log("Error connecting: " + err));

    return db;
}