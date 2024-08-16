import User from "../models/user.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/token.js";

// Signup endpoint
export const signup = async (req, res) => {
    try {
        
        //Destructuring the request body to get the values of fullName, userName, password, confirmPassword and gender
        const { fullName, userName, password, confirmPassword, phone, address, gender } = req.body;
        
        //Validation
        if (password!==confirmPassword) {
            return res.status(400).json({ error: 'Password do not match' });
        }

        //Check if the username already exists in the database
        const user = await User.findOne({ userName });
        if (user) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        //Hash the password
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //Create a new user document and save it to the database
        const newUser = new User({
            fullName,
            userName,
            password: hashedPassword,
            phone,
            address,
            gender,
        });

        if (newUser) {
            //jwt token
            
            //Set the token in the cookie and send the response with the user data to the client
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();

            //Send the response with the user data to the client
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
            });
        }
        else {
            res.status(400).json({ error: 'Invalid user data' });
        }
        
    } catch (error) {
        console.log("Error in signup controller",error.message);
        res.status(500).json({error:"Internal server error"})
    }
};

// Login endpoint
export const login = async (req, res) => {
    try {
        // Destructuring the request body to get the values of userName and password
        const { userName, password } = req.body;
        
        //Check if the username exists in the database
        const user = await User.findOne({ userName });
        
		const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid username or password" });
		}
        
		generateTokenAndSetCookie(user._id, res);

		res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			userName: user.userName,
		});
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

// Logout endpoint
export const logout = async (req, res) => {
    try {
        //Clear the JWT token from the client's cookies
        res.cookie("jwt", "", { maxAge:0 });
        res.status(200).json({ message: "Logged out successfully" });
        
    } catch (error) {
        console.log("Error in logout controller",error.message);
        res.status(500).json({error:"Internal server error"})
    }
};


