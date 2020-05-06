const express = require('express')
const path = require('path')
const body_parser = require('body-parser')
const cors = require('cors')
const mongodb = require('mongodb')
const {saveTodoList,fetchFirstFive,fetchAllTodoList,countDocuments} = require('./routes/todoList')
const {saveEmployee,fetchEmployeeList} = require('./routes/employees')

const MongoClient = mongodb.MongoClient

//connection parameters
const con = 'mongodb://127.0.0.1:27017'
const dbName = 'EmployeeDB'

//variable to hold the database
var db;


const app = express()
 app.use(express.json())
 app.use(cors())

//setting path to public and views files
const publicDirPath = path.join(__dirname,'./public')
 app.set('views',path.join(__dirname,'views'))

app.set('view engine','ejs')
app.use('/public',express.static(publicDirPath))

//listing on a port and connecting to mongodb
app.listen(8000,()=>{
    console.log('Server Listening on port '+8000 +'!')
    console.log('*************************************************')
    console.log('Connecting to database')
    MongoClient.connect(con,{useNewUrlParser:true}).then((client)=>{
        db = client.db(dbName)
    }).catch((err)=>{
        console.log('Could not connect to database '+err)
    })
})

app.get('/',(req,res)=>{
    res.render('todoList')
})
app.get('/todoList',(req,res)=>{
    res.render('todoList')
})


app.get('/viewTodoList',(req,res)=>{
    res.render('viewTodoList')
})

app.get('/employeeList',(req,res)=>{
    res.render('viewEmployees')
})

app.get('/addEmployee',(req,res)=>{
    res.render('addEmployee')
})

app.post('/todoList',(req,res)=>{
    console.log(total)
    saveTodoList(req.body,db,(error,result)=>{
        if(error) return res.status(400).send({
            status:'error',
            message:error
        })
        res.status(200).send({
            message:"List Successfully Added"
        })
    })
})

app.get('/todoListFive',(req,res)=>{
    fetchFirstFive(db,(error,result)=>{
        if(error) return res.send(error)
        res.send(result)
    })
})

app.get('/AllTodoList',(req,res)=>{
    fetchAllTodoList(db,(error,result)=>{
        if(error) return res.send(error)
        res.send(result)
    })
})

app.get('/AllEmployees',(req,res)=>{
    fetchEmployeeList(db,(error,result)=>{
        if(error) return res.send(error)
        res.send(result)
    })
})

app.post('/addEmployee',(req,res)=>{
    saveEmployee(req.body,db,(error,result)=>{
        if(error) return res.status(400).send({
            status:'error',
            message:error
        })
        res.status(200).send({
            message:"Employee Successfully Added"
        })
    })
})