import asyncHandler from "express-async-handler"
import User from "../models/userModels.js"
import generateToken from "../utils/generateToken.js";

//@desc Auth user/set token
// route Post /api/users/auth
// @access Public

const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Auth User Route Hit' });
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public

const regesterUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }
    const user = await User.create({
        name,
        email,
        password,
    });

    if (user) {
        generateToken(res, user._id);

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});


//@desc Auth user/set token
// route Post /api/users/logout
// @access Public

const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'logOut User' });
});

// @desc get Ussr profiles
// route get /api/users/profile
// @access privite

const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'User Profile' });
});

const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Update User Profile' });
});


export {
    authUser,
    regesterUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
}