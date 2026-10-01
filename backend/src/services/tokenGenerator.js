const jwt = require("jsonwebtoken");

/** 
 *  Generates a JSON Web Token (JWT) for user authentication.
 *
 *  @param {string} id - The unique identifier of the user in the database.
 *  @param {string} username - The username of the user.
 * @returns {string} A signed JWT that expires after 1 day.
 */
function generateJWT(id, username) {
  const token = jwt.sign(
    {
      id,
      username,
    },
    process.env.JWT_KEY,
    {
      expiresIn: "1d",
    },
  );

  return token;
}

module.exports = generateJWT;
