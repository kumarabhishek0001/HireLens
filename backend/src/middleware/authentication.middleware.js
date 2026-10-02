const blackListTokenModel = require("../models/blacklistedToken.models");

const jwt = require("jsonwebtoken");

/**

* Authenticates a request using the JWT stored in the token cookie.
* 
* 
* Verifies that a token exists, has not been blacklisted, and is a valid JWT.
* The decoded JWT payload is attached to req.user so that downstream
* middleware and route handlers can access the authenticated user's data.
* 
* 
* @param {import("express").Request} req - Express request object. The decoded JWT payload is attached to req.user.
* @param {import("express").Response} res - Express response object used to send authentication errors.
* @param {import("express").NextFunction} next - Express callback used to pass control to the next middleware or route handler.
* @returns {Promise<void>} Resolves after authentication succeeds or an error response is sent.
*/

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "No token found",
    });
  }

  const isTokenBlackListed = await blackListTokenModel.findOne({ token });

  if (isTokenBlackListed) {
    return res.status(401).json({
      message: "Invalid Token. Something is fisshy",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    console.log(decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.log("auth middleware error: ", error);
    return res.status(500).json({
      message: "Invalid Token",
    });
  }
};

module.exports = authMiddleware;
