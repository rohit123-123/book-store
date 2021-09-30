const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const db = require('../db')
const utils = require('../utils')

router.post('/insert',upload.single('Thumbnail'), (request, response) => {
    console.log(request.body)
    console.log(request.file)
    const {
        Book_name,
        ISBN,
        Price,
        Author_id,
     
        Language,
        Description,
        Edition,
        Publisher_id,
        Genre } = request.body

const filename=request.file.filename



    const query = `insert into product_table ( 
    
        Book_name,
        ISBN,
        Price,
        Author_id,
      THUMBNAIL,
        Language,
        Description,
        Edition,
        Publisher_id,
        Genre)
    values

    (
        '${Book_name}',
   '${ISBN}',
    '${Price}',
    '${Author_id}',
    '${filename}',
    '${Language}',
    '${Description}',
    '${Edition}',
    '${Publisher_id}',
    '${Genre}'
    )`


    console.log(query, "Q");
    db.query(query, (error, result) => {
        console.log(error, "==ERROR==")
        response.send(utils.createResult(error, result))

    })

})


router.get('/all', (request, response) => {
    




    const query = `select * from  product_table`


    db.query(query, (error, author) => {

        response.send(utils.createResult(error, author))

    })

})



router.get('/search/:id',(request,response)=>{
    


    

    const query=`select * from  product_table where book_id=${request.params.id}`
  
  
    db.query(query, (error,author)=>{
  
    response.send(utils.createResult(error,author))
  
    })
  
  })


  router.delete('/delete/:id',(request,response)=>{
    


    

    const query=`delete from product_table where Book_id=${request.params.id}`


    db.query(query, (error,author)=>{

    response.send(utils.createResult(error,author))

    })

})




module.exports = router