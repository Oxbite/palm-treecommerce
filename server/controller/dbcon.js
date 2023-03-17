const { default: mongoose } = require("mongoose")

exports.connect = async (req,res) => {
    try {
        await mongoose.connect("asdfasdfasdf");

    } catch (err) {

        return false;
    }
        
    return true;
}