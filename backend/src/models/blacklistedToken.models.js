const { Schema, model } = require("mongoose");

const blackListTokenSchema = new Schema(
  {
    token: {
      type: String,
      required: [true, "Token is required to blacklist"],
    },
  },
  {
    timestamps: true,
  },
);

const blackListTokenModel = model("blacklistedToken", blackListTokenSchema)

module.exports = blackListTokenModel