const express = require("express")
const router = express.Router()
const SignUpController = require("../controller/signUpController")
const LoginController = require("../controller/loginController")


router.post("/api/signUp",SignUpController.post)

router.post("/api/login",LoginController.post)







module.exports = router