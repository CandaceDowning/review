require('dotenv').config()
const express = require('express')
const {json} = require('body-parser')
const session =  require('express-session')
const massive = require('massive')
const app = express()
const {signup, login, getUser} = require('./authController')

app.use(json())

//sets up session 
app.use(
    session({
        secret: process.env.SECRET,
        resave: true,
        saveUninitialized: false,
        cookie: {
            maxAge:1000*60*60*24*7
        }
    })
);

//sets up massive for database connection
massive(process.env.CONNECTION_STRING).then(db=>{
    app.set("db", db);
    console.log("Database connected")
})



//endpoints pass info to the controller 
app.post('/auth/signup', signup)
app.post(`/auth/login`, login)
app.get(`/auth/user`, getUser)


//tells the server what port to use
app.listen(process.env.EXPRESS_PORT, ()=>{
    console.log(`listening on ${process.env.EXPRESS_PORT}`)
})