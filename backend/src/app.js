const authRouter = require("./routes/authentication.routes.js")

const cookieParser = require("cookie-parser")
const express = require("express");
const app = express()

// * middleware
app.use(express.json())
app.use(cookieParser())

// * health check
app.get("/check-health", (req, res) => {
    res.send("App is live")
})

// * Mounts the authentication routes under the /api/auth base path
app.use("/api/auth", authRouter)


module.exports = app