const express= require('express')
const router= express.Router()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const db=require('../db')
const utils= require('../utils')

router.post('/insert',(request,response)=>{
    const{Pincode,
        State,
        City,
        District,
        Country}=request.body

    const query=`insert into location (Pincode,
        State,
        City,
        District,
        Country)
    values
    (
    '${Pincode}',
    '${State}',
    '${City}',
    '${District}',
    '${Country}')`

    db.query(query, (error,result)=>{

    response.send(utils.createResult(error,result))

    })



})


router.get('/all',(request,response)=>{
  

    
    

    const query=`select * from  location`


    db.query(query, (error,location)=>{

    response.send(utils.createResult(error,location))

    })

})




router.get('/search/:id',(request,response)=>{
    


    

    const query=`select * from  location where pincode=${request.params.id}`
  
  
    db.query(query, (error,author)=>{
  
    response.send(utils.createResult(error,author))
  
    })
  
  })



  router.delete('/delete/:id',(request,response)=>{
    


    

    const query=`delete from location where Pincode=${request.params.id}`
  
  
    db.query(query, (error,author)=>{
  
    response.send(utils.createResult(error,author))
  
    })
  
  })


module.exports=router