const express= require('express')
const router= express.Router()

const db=require('../db')
const utils= require('../utils')

router.post('/carttable',(request,response)=>{
    const{Created_On}=request.body

    const query=`insert into cart_table
    values
    ()`

    db.query(query, (error,result)=>{

    response.send(utils.createResult(error,result))

    })



})



module.exports=router