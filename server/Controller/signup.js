const signUpSchema = require('../Models/signupSchema')
const bcrypt = require('bcryptjs')



const Signup = async (req, res) => {
    const { fname, mobile, password } = req.body;
  // console.log('ok');
    try {
      const oldUser = await signUpSchema.findOne({ mobile });
  
      if (oldUser) {
        return res.status(200).send({ msg: "User already exists", oldUser });
      }
  
      const encrypted = await bcrypt.hash(password, 8);
      const newUser = new signUpSchema({
        fname,
        mobile,
        password: encrypted,
      });
  
      await newUser.save();
  
      const token = jwt.sign(
        { user_id: newUser._id, email },
        secretKey,
        {
          expiresIn: "2h",
        }
      );
  
      newUser.token = token;
  
      const userWithSignedToken = {
        newUser,
        token,
        success:true
      };
  
      return res.status(200).send({ msg: "User created", userWithSignedToken });
    } catch (error) {
      console.error(error);
      return res.send({ msg: "Error creating user", error });
    }
  };

  module.exports= Signup;