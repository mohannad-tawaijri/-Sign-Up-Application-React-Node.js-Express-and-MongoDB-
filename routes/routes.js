const express=require('express')
const router =express.Router()
const signUpTemplateCopy=require('../models/SignUpModels')
const bcrypt=require('bcrypt')




router.post('/signup',async (req,res) =>{
    const saltPassword=await bcrypt.genSalt(10)
    const secure=await bcrypt.hash(req.body.password,saltPassword)
    const SignedUpUser= new signUpTemplateCopy({
        fullName:req.body.fullName,
        username:req.body.username,
        email:req.body.email,
        password:secure
    })
    SignedUpUser.save()
    .then(data =>{
        res.json(data)
    })
    .catch(error =>{
        res.json(error)
    })
})
module.exports=router
