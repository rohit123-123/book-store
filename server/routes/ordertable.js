const express= require('express')
const router= express.Router()

const db=require('../db')
const utils= require('../utils')

router.post('/ordertable',(request,response)=>{
    const{ 
        Customer_id,
        Created_On,
        Total_amount,
        Status}=request.body

    const query=`insert into order_table ( 
        Customer_id,
        
        Total_amount,
        Status)
    values
    (
    '${Customer_id }',
    '${ Total_amount}',
    '${ Status}')`

    db.query(query, (error,result)=>{

    response.send(utils.createResult(error,result))

    })



})






router.get('/allorders',(request,response)=>{
    


    

    const query=`select * from  order_table `
  
  
    db.query(query, (error,author)=>{
  
    response.send(utils.createResult(error,author))
  
    })
  
  })

module.exports=router