const jwt = require("jsonwebtoken");

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

  return token
}

module.exports = generateJWT
