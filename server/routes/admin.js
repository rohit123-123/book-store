const express= require('express')
const router= express.Router()

const db=require('../db')
const utils= require('../utils')

router.post('/login',(request,response)=>{
    const{Email,Password}=request.body

    const query=`select password from admin where Email='${Email}'`

    db.query(query, (error,result)=>{
  console.log(result[0].password  )

   if (result[0].password==Password)
    response.send(utils.createResult(error,result))
else
response.send(utils.createError(error))
    })



})



module.exports=router