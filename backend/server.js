require("dotenv").config({ quiet: true });
const chalk = require("chalk");

const port = process.env.PORT || 3000;

const app = require("./src/app");
const connectDb = require("./src/config/database");
connectDb();

app.listen(port, () => {
  console.log(chalk.bgBlue(`App is live on http://localhost:${port}`));
});
