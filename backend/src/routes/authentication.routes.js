const {registerUserController, loginUserController, logoutUserController, getUserInfoController} = require("../controllers/authentication.controllers.js")

const {Router} = require("express")

const router = Router()

router.post("/register", registerUserController)
router.post("/login", loginUserController)
router.get("/logout", logoutUserController)
router.get("/get-me", getUserInfoController)

module.exports = router