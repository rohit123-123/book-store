const express = require('express')
const cors=require('cors')
const bodyParser=require('body-parser')



const app=express()
app.use(express.static('./uploads'))
app.use(cors('*'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
 
app.use(express.static('public'));

//routers
const routercustomer=require('./routes/customer')
const routerauthor=require('./routes/author')
const routerproduct=require('./routes/product')
const routerorder=require('./routes/order')
const routerpublisher=require('./routes/publisher')
const routerinventory=require('./routes/inventory')
const routercarttable=require('./routes/carttable')
const routercartdetails=require('./routes/cartdetails')
const routerordertable=require('./routes/ordertable')
const routerlocation=require('./routes/location')
const routeradmin=require('./routes/admin')
//add the router

app.use('/customer',routercustomer)
app.use('/author',routerauthor)
app.use('/product',routerproduct)
app.use('/order',routerorder)
app.use('/publisher',routerpublisher)
app.use('/inventory',routerinventory)
app.use('/carttable',routercarttable)
app.use('/cartdetails',routercartdetails)
app.use('/ordertable',routerordertable)
app.use('/location',routerlocation)
app.use('/admin',routeradmin)

app.listen(4000,'0.0.0.0',()=>{
console.log('Server started at port 4000')
})