const userModel = require("../models/user.models");

const bcrypt = require("bcryptjs");
const generateJWT = require("../services/tokenGenerator");

/**

* Registers a new user and authenticates them using a JWT.
* 
* 
* Checks whether the required fields are provided and whether
* the email or username is already registered. The password is
* hashed before storing the user in the database.
* 
* 
* @param {import("express").Request} req  Express request object containing username, email, and password.
* @param {import("express").Response} res  Express response object used to send the response.
* @returns {Promise<import("express").Response>} Express response containing the created user or an error message.
*/
const registerUserController = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const user = await userModel.findOne({
    $or: [{ email }, { username }],
  });

  if (user) {
    // console.log(user);
    return res.status(409).json({
      message: "User already exists with this email or username",
    });
  }

  const hash_password = await bcrypt.hash(password, 10);

  const new_user = await userModel.create({
    username,
    email,
    password: hash_password,
  });

  const token = generateJWT(new_user._id, new_user.username);

  res.cookie("token", token);

  return res.status(201).json({
    message: "User Created Successfully",
    user: {
      _id: new_user._id,
      email: new_user.email,
      username: new_user.username,
    },
    token,
  });
};

/**
 * Login user and authenticate them using JWT.
 * 
 * Checks wheather the required fields are provided and whether
 * provided credentials matches user in database.
 * 
 * 
 * @param {import("express").Request} req Express request object containing username and password
 * @param {import("express").Response} res Express response object used to send response
 * @returns {Promise<import("express").Response>} Express response containing the created user or an error message
 */
const loginUserController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.stauts(400).json({
      message: "All fields are required",
    });
  }

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(401).json({
      message: "Invalid Credentials 1",
    });
  }

  const isValidPassword = await bcrypt.compare(password, user.password)

  if(!isValidPassword){
    return res.status(401).json({
      message: "Invalid credentials 2"
    })
  }

  const token = generateJWT(user._id, user.username)

  res.cookie("token", token)

  res.status(200).json({
    message: "user logged in sucessfully",
    user: {
      id: user._id,
      email: user.email,
      username: user.username
    },
    token
  })
};

const logoutUserController = async (req, res) => {};

const getUserInfoController = async (req, res) => {};

module.exports = {
  registerUserController,
  loginUserController,
  logoutUserController,
  getUserInfoController,
};
