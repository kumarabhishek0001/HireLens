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
* @param {import("express").Request} req - Express request object containing username, email, and password.
* @param {import("express").Response} res - Express response object used to send the response.
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

  res.cookie("token", token)

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

const loginUserController = async (req, res) => {};

const logoutUserController = async (req, res) => {};

const getUserInfoController = async (req, res) => {};

module.exports = {
  registerUserController,
  loginUserController,
  logoutUserController,
  getUserInfoController,
};
