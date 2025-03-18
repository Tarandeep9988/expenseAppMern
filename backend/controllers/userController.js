const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");

// Register
const registerController = async (req, res, next) => {
  try {
    const {name, email, password} = req.body;
    
    // console.log(name, email, password);

    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "Please enter All Fields",
        });
    }

    let user = await User.findOne({email});

    if (user) {
        return res.status(409).json({
            success: false,
            message: "User already Exists",
        });
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);
    
    // console.log(hashedPassword);

    let newUser = await User.create({
        name, 
        email,
        password: hashedPassword,
    });

    delete newUser.password;
    return res.status(200).json({
        success: true,
        message: "User Created Successfully",
        user: newUser,
    })
  }  
  catch(err) {
    return res.status(500).json({
        success: false,
        message: err.message,
    })
  }
};

// Login 
const loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // console.log(email, password);

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please enter All Fields",
            });
        }

        const user = await User.findOne({ email });

        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(401).json({
                success: false,
                message: "Incorrect Email or Password",
            })
        }
        delete user.password;

        return res.status(200).json({
            success: true,
            message: `Welcome back, ${user.name}`,
            user,
        });
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}

module.exports = {registerController, loginController};