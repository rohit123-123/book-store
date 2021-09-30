const express= require('express')
const router= express.Router()
const db=require('../db')
const utils= require('../utils')
const cryptoJs=require('crypto-js')

router.post('/signup',(request,response)=>{
    const{Customer_id,Cust_Name,Street_Name,Pincode,Phone_no,Email,Password,Cart_id}=request.body

const encryptedPassword=cryptoJs.MD5(Password)

    const query=`insert into customer (Cust_name,
        Street_Name,
        Pincode,
        Phone_no,
        Email,
        Password,
        Cart_id)
    values
    ('${Cust_Name}',
    '${Street_Name}',
    '${Pincode}',
    '${Phone_no}',
    '${Email}',
  
  '${encryptedPassword}',
    '${Cart_id}')`

    db.query(query, (error,result)=>{

    response.send(utils.createResult(error,result))

    })

})



router.post('/signin',(request,response)=>{
  const{Email,Password}=request.body

const encryptedPassword=cryptoJs.MD5(Password)

  const query=`select * from customer where Email='${Email}'
   and 
   Password='${encryptedPassword}'`

  db.query(query, (error,users)=>{

if(error){
  response.send(utils.createError)
}
else{
  if(users.length==0){
    response.send(utils.createError('Invalid user name or password'))
  }
  else {
    response.send(utils.createResult(error, users[0]))
  }
}


  })



})




router.get('/profile/:id',(request,response)=>{
  const{id}=request.params



  const query=`select * from customer where Customer_id=${id}`

  db.query(query, (error,users)=>{

if(error){
  response.send(utils.createError)
}
else{
  if(users.length==0){
    response.send(utils.createError('Invalid user name or password'))
  }
  else {
    response.send(utils.createResult(error, users[0]))
  }
}


  })



})


router.delete('/profile/:id',(request,response)=>{
  const{id}=request.params



  const query=`delete  from customer where Customer_id=${id}`

  db.query(query, (error,result)=>{


    response.send(utils.createResult(error, result))



  })



})


router.get('/all',(request,response)=>{
  const{Author_Name,}=request.body

  
  

  const query=`select * from  customer`


  db.query(query, (error,author)=>{

  response.send(utils.createResult(error,author))

  })

})


router.get('/search/:id',(request,response)=>{
    


    

  const query=`select * from  customer where customer_id=${request.params.id}`


  db.query(query, (error,author)=>{

  response.send(utils.createResult(error,author))

  })

})


router.delete('/delete/:id',(request,response)=>{
    




  const query=`delete from customer where customer_id=${request.params.id}`


  db.query(query, (error,author)=>{

  response.send(utils.createResult(error,author))

  })

})


module.exports=router
