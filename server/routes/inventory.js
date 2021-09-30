const express= require('express')
const router= express.Router()

const db=require('../db')
const utils= require('../utils')

router.post('/inventory',(request,response)=>{
    const{Book_id,
        Quantity,
        Available_Status}=request.body

    const query=`insert into inventory (Book_id,
        Quantity,
        Available_Status)
    values
    (
    '${Book_id}',
    '${Quantity}',
    '${Available_Status}')`

    db.query(query, (error,result)=>{

    response.send(utils.createResult(error,result))

    })



})





router.get('/all',(request,response)=>{

    const query=`select * from inventory`

    db.query(query,(error,location)=>{
        response.send(utils.createResult(error,location))
    })
})




router.put('/update',(request,response)=>{


    const{book_id,
        quantity,
        }=request.body

    const query=`update inventory set quantity =${quantity}  where book_id = ${book_id}`

    db.query(query,(error,location)=>{
        response.send(utils.createResult(error,location))
    })
})



module.exports=router