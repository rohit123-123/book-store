const express= require('express')
const router= express.Router()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const db=require('../db')
const utils= require('../utils')

router.post('/insert',upload.single('Author_thumb'),(request,response)=>{
    const{Author_Name}=request.body

    
    const Author_thumb=request.file.filename

    const query=`insert into author (
        Author_Name,
        Author_thumb)
    values
    (
    '${Author_Name}',
    '${Author_thumb}')`


    db.query(query, (error,result)=>{

    response.send(utils.createResult(error,result))

    })

})



router.get('/all',(request,response)=>{
    const{Author_Name,}=request.body

    
    

    const query=`select * from  author`


    db.query(query, (error,author)=>{
        console.log(author, error, "ERROR AUTHOR");
    response.send(utils.createResult(error,author))

    })

})

router.get('/search/:id',(request,response)=>{
    


    

    const query=`select * from  author where Author_id=${request.params.id}`


    db.query(query, (error,author)=>{

    response.send(utils.createResult(error,author))

    })

})

router.delete('/delete/:id',(request,response)=>{
    


    

    const query=`delete from  author where Author_id=${request.params.id}`


    db.query(query, (error,author)=>{

    response.send(utils.createResult(error,author))

    })

})





module.exports=router