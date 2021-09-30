const express= require('express')
const router= express.Router()

const db=require('../db')
const utils= require('../utils')

router.post('/insert',(request,response)=>{
    const{Publication,Publication_Email}=request.body

    console.log(request.body)

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

router.get('/all',(request,response)=>{
    const{Publisher_id, Publication, Publication_Email}=request.body

    const query=`select * from publisher `

    db.query(query, (error,result)=>{

    response.send(utils.createResult(error,result))

    })



})


router.get('/search/:id',(request,response)=>{
    


    

    const query=`select * from  publisher where publisher_id=${request.params.id}`
  
  
    db.query(query, (error,author)=>{
  
    response.send(utils.createResult(error,author))
  
    })
  
  })

  router.delete('/delete/:id',(request,response)=>{
    


    

    const query=`delete from publisher where publisher_id=${request.params.id}`


    db.query(query, (error,author)=>{

    response.send(utils.createResult(error,author))

    })

})



module.exports=router