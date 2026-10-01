const mongoose = require("mongoose");
const chalk = require("chalk");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log(chalk.bgGreen("DB connected sucessfully"));
  } catch (error) {
    console.log(chalk.bgRed("Error Connecting to DB"));
    console.log(error)
  }
};


module.exports = connectDB