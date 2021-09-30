const express= require('express')
const router= express.Router()

const db=require('../db')
const utils= require('../utils')

router.post('/name',(request,response)=>{
    const{Publisher_id, Publication, Publication_Email}=request.body

    const query=`insert into publisher (
        Publication,
        Publication_Email)
    values
    (
    '${Publication}',
    '${Publication_Email}')`

    db.query(query, (error,result)=>{

    response.send(utils.createResult(error,result))

    })



})



module.exports=router