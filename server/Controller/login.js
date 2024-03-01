const signUpSchema = require('../Models/signupSchema');
const bcrypt = require('bcryptjs');

const signIn = async (req, res) => {
    try {
        const { mobile, password } = req.body;
        // console.log(req.body);
        const user = await signUpSchema.findOne({ mobile });
   
        if (user && (await bcrypt.compare(password, user.password))) {
            // console.log("OK2");
            return res.status(200).json({ msg: "SignedIn" });
        } else {
            return res.status(400).json({ success: false, message: "Invalid Credentials" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = signIn;
