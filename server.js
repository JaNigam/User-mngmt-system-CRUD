//creating the http server
//for theis we need the express module
const express = require("express");
// const dotenv = require('dotenv');
// dotenv.config({ path: 'config.env' })
const morgan = require('morgan');
require('dotenv').config({ path: 'config.env' })
const app = express();
const bodyparser = require('body-parser')
const path = require('path');


const PORT = process.env.PORT || 8080

// to display log requests in the terminal
app.use(morgan('tiny'))

//parse request to body parser
app.use(bodyparser.urlencoded({ extended: true }))

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

//set view engine
app.set("view engine", 'ejs')

//when we route to the root page
app.get('/', (req, res) => {
    //we don't need to specify index.js since we already sepecified it(see line# 27)
    res.render('index');
})

app.get('/add-user', (req, res) => {
    //this will render the add_user.ejs file
    res.render('add_user');
})



app.listen(3000, () => { console.log(`server is running on http://localhost:${PORT}`) });