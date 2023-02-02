const userModel = require("../models/userSchema")
const bcrypt = require("bcrypt")

const  SignUpController = {
    post : (req,res)=>{

        console.log(req.body,"body")

        const {userName,email,password,mobileNumber,category} = req.body

        if(!userName || !email || !password || !mobileNumber || !category ){
                res.json({
                    "message" : "Required Fields are missing",
                    "status" : false
                })
                return
        }

        userModel.findOne({email},(err,data)=>{
            if(err){
                res.json({
                    "message" : `Internal Error ${err}`,
                    "status" : false
                })
                return 
            }
            
            if(data){
                res.json({
                    "message" : `Email already Exists`,
                    "status" : false
                })
            }
            else {

                const hashPassword = bcrypt.hashSync(password,10)

                const objToSend = {
                    username : userName,
                    email,
                    mobile_number : mobileNumber,
                    password : hashPassword,
                    category

                }

                userModel.create(objToSend,(err,data)=>{
                    if(err){
                        res.json({
                            "message" : `Internal Error ${err}`,
                            "status" : false
                        })
                    }
                    else {
                        res.json({
                            "message" : "user successfully Created",
                            "status" : true
                        })
                    }
                })
            }

        })


    }
}

module.exports = SignUpController;