const express= require('express')
const router= express.Router()

const db=require('../db')
const utils= require('../utils')

router.post('/cartdetails',(request,response)=>{
    const{Cart_id
        ,Book_id
        ,Quantity
        ,Amount}=request.body

    const query=`insert into cart_details (Cart_id
        ,Book_id
        ,Quantity
        ,Amount)
    values
    ('${Cart_id}',
    '${Book_id}',
    '${Quantity}',
    '${Amount}')`

    db.query(query, (error,result)=>{

    response.send(utils.createResult(error,result))

    })



})



module.exports=router