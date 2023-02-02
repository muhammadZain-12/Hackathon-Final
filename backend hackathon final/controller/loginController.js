const userModel = require("../models/userSchema")
const bcrypt = require("bcrypt")

const LoginController = {

    post : (req,res)=>{
        const {email,password} = req.body

        console.log(req.body,"body")

        if(!email,!password){
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

            if(!data){
                res.json({
                    "message" : "Email and Passoword does not exists",
                    "status" : false
                })
                
            }
            else {

                const isPasswordMatched = bcrypt.compareSync(password,data.password)

                if(!isPasswordMatched){
                    res.json({
                        "message" : "Email and password does not exists",
                        "status" : false
                    })
                }
                else {
                    delete data.password

                    res.json({
                        "message" : "Successfully login",
                        "status" : true,
                        data
                    })
                }

            }

        })


    }

}

module.exports = LoginController